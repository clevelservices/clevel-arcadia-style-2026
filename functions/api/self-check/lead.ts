import { json, sameSite, sha256, type Env } from './_shared';

const clip = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VERDICTS: Record<string, string> = { ready: 'Hazır', partial: 'Kısmen hazır', hard: 'Zor', blocked: 'Engel (borç)' };

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!sameSite(request)) return json({ error: 'forbidden' }, 403);
  let b: any;
  try { b = await request.json(); } catch { return json({ error: 'bad_request' }, 400); }

  // Bots: a hidden field filled in, or the form sent within 3 seconds of the result appearing.
  if (clip(b.website, 200) || Number(b.elapsed) < 3000) return json({ ok: true });

  const lead = {
    name: clip(b.name, 120), company: clip(b.company, 160), email: clip(b.email, 160), phone: clip(b.phone, 40),
    note: clip(b.note, 1500), lang: b.lang === 'en' ? 'en' : 'tr', verdict: clip(b.verdict, 20), summary: clip(b.summary, 6000),
  };
  if (!lead.name || !EMAIL_RE.test(lead.email) || b.consent !== true) return json({ error: 'invalid' }, 422);

  // Retention promised in the privacy notice: stored requests are removed after one month.
  await env.DB.prepare("DELETE FROM leads WHERE created_at < datetime('now', '-1 month')").run();

  const ipHash = await sha256(`clevel-self-check:${request.headers.get('cf-connecting-ip') || ''}`);
  const recent = await env.DB.prepare("SELECT COUNT(*) AS c FROM leads WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')").bind(ipHash).first<{ c: number }>();
  if ((recent?.c ?? 0) >= 5) return json({ error: 'too_many' }, 429);

  const ins = await env.DB.prepare(
    'INSERT INTO leads (lang, name, company, email, phone, note, verdict, summary, consent, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?) RETURNING id',
  ).bind(lead.lang, lead.name, lead.company, lead.email, lead.phone, lead.note, lead.verdict, lead.summary, ipHash).first<{ id: number }>();

  // Notify by email through the mailer Worker; the lead is already saved, so a failure here is not fatal.
  if (env.MAILER) {
    const text = [
      'Kendin Yap Testi üzerinden yeni bir iletişim talebi geldi.',
      '',
      `Ad soyad: ${lead.name}`,
      `Şirket: ${lead.company || '-'}`,
      `E-posta: ${lead.email}`,
      `Telefon: ${lead.phone || '-'}`,
      `Dil: ${lead.lang.toUpperCase()}`,
      `Sonuç: ${VERDICTS[lead.verdict] || lead.verdict || '-'}`,
      '',
      'Not:',
      lead.note || '-',
      '',
      'Test özeti:',
      lead.summary || '-',
      '',
      `Kayıt no: ${ins?.id ?? '-'}`,
    ].join('\n');
    try {
      const r = await env.MAILER.fetch('https://mailer/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ subject: `Kendin Yap Testi: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`, text, replyTo: lead.email }),
      });
      if (r.ok && ins?.id) await env.DB.prepare('UPDATE leads SET notified = 1 WHERE id = ?').bind(ins.id).run();
    } catch { /* stays notified = 0 */ }
  }
  return json({ ok: true });
};

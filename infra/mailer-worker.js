// clevel-mailer: a private Worker that sends lead notifications to info@clevel.services.
// Reached only through the Pages project's MAILER service binding (no public route).
// Bindings: EMAIL (send_email, destination info@clevel.services). Sender domain: cleveldanismanlik.com (Email Routing on).
import { EmailMessage } from 'cloudflare:email';

const FROM = 'bildirim@cleveldanismanlik.com';
const TO = 'info@clevel.services';

const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
const header = (s) => `=?UTF-8?B?${b64(s)}?=`;
const wrap = (s) => (s.match(/.{1,76}/g) || []).join('\r\n');

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response('Not found', { status: 404 });
    const { subject = 'Bildirim', text = '', replyTo = '' } = await request.json();
    const raw = [
      `From: ${header('C-Level Site')} <${FROM}>`,
      `To: <${TO}>`,
      replyTo && /^[^\s@<>]+@[^\s@<>]+$/.test(replyTo) ? `Reply-To: <${replyTo}>` : '',
      `Subject: ${header(subject)}`,
      `Message-ID: <${crypto.randomUUID()}@cleveldanismanlik.com>`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      wrap(b64(text)),
    ].filter((l, i) => l !== '' || i > 8).join('\r\n');
    try {
      await env.EMAIL.send(new EmailMessage(FROM, TO, raw));
      return new Response('sent');
    } catch (e) {
      return new Response(`failed: ${e && e.message}`, { status: 502 });
    }
  },
};

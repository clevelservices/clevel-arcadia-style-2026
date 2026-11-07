// clevel-mailer: a private Worker that sends lead notifications to selman@clevel.services (info@ is an alias of this mailbox).
// Reached only through the Pages project's MAILER service binding (no public route).
// Bindings: EMAIL (Email Service / send_email). Sender domain: cleveldanismanlik.com (Email Routing on).
import { EmailMessage } from 'cloudflare:email';

const FROM = 'bildirim@cleveldanismanlik.com';
const TO = 'selman@clevel.services';

const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
const mimeHeader = (s) => `=?UTF-8?B?${b64(s)}?=`;
const okAddr = (s) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(s || '');

function rawMessage(subject, text, replyTo) {
  const lines = [
    `From: ${mimeHeader('C-Level Site')} <${FROM}>`,
    `To: <${TO}>`,
    `Subject: ${mimeHeader(subject)}`,
    `Message-ID: <${crypto.randomUUID()}@cleveldanismanlik.com>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ];
  if (okAddr(replyTo)) lines.splice(2, 0, `Reply-To: <${replyTo}>`);
  return lines.join('\r\n') + '\r\n\r\n' + (b64(text).match(/.{1,76}/g) || []).join('\r\n');
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response('Not found', { status: 404 });
    const { subject = 'Bildirim', text = '', replyTo = '' } = await request.json();
    const errors = [];
    // 1) Email Service object API
    try {
      const msg = { from: FROM, to: TO, subject, text };
      if (okAddr(replyTo)) msg.replyTo = replyTo;
      await env.EMAIL.send(msg);
      return new Response('sent');
    } catch (e) { errors.push(`object: ${e && (e.code || '')} ${e && e.message}`); }
    // 2) Email Routing raw MIME API
    try {
      await env.EMAIL.send(new EmailMessage(FROM, TO, rawMessage(subject, text, replyTo)));
      return new Response('sent (raw)');
    } catch (e) { errors.push(`raw: ${e && e.message}`); }
    return new Response(`failed: ${errors.join(' | ')}`, { status: 502 });
  },
};

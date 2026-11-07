// Shared helpers for the self-check API (Cloudflare Pages Functions).
// Bindings set in the Pages project: DB (D1 database), MAILER (service binding to the clevel-mailer Worker).

export interface Env {
  DB: D1Database;
  MAILER?: Fetcher;
}

export const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...extra } });

/** Requests must come from our own pages. */
export const sameSite = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const h = new URL(origin).hostname;
    return h === 'www.clevel.services' || h === 'clevel.services' || h.endsWith('.clevel-arcadia-style-2026.pages.dev') || h === 'clevel-arcadia-style-2026.pages.dev' || h === 'localhost';
  } catch { return false; }
};

export const counter = async (env: Env, add: boolean) => {
  const row = add
    ? await env.DB.prepare("UPDATE counters SET n = n + 1 WHERE id = 'self_check' RETURNING n").first<{ n: number }>()
    : await env.DB.prepare("SELECT n FROM counters WHERE id = 'self_check'").first<{ n: number }>();
  return row?.n ?? 0;
};

export const sha256 = async (text: string) => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
};

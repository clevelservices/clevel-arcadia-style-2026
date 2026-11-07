import { json, counter, sameSite, type Env } from './_shared';

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!sameSite(request)) return json({ error: 'forbidden' }, 403);
  try {
    const completed = await counter(env, true);
    // Retention promised in the privacy notice: stored requests are removed after one month.
    await env.DB.prepare("DELETE FROM leads WHERE created_at < datetime('now', '-1 month')").run();
    return json({ completed });
  } catch {
    return json({ error: 'unavailable' }, 503);
  }
};

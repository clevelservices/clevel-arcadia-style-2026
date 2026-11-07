import { json, counter, sameSite, type Env } from './_shared';

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!sameSite(request)) return json({ error: 'forbidden' }, 403);
  try {
    return json({ completed: await counter(env, true) });
  } catch {
    return json({ error: 'unavailable' }, 503);
  }
};

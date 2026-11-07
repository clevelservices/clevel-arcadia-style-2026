import { json, counter, type Env } from './_shared';

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  try {
    return json({ completed: await counter(env, false) }, 200, { 'cache-control': 'public, max-age=300' });
  } catch {
    return json({ error: 'unavailable' }, 503);
  }
};

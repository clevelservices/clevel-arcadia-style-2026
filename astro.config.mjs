import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.clevel.services',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});

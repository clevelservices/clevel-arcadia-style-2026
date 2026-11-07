import { services, servicePath } from '../data/services';
import { routes, SITE } from '../i18n/ui';

export function GET() {
  const pairs: [string, string][] = [
    ...Object.values(routes).map((r) => [r.tr, r.en] as [string, string]),
    ...services.map((s) => [servicePath(s, 'tr'), servicePath(s, 'en')] as [string, string]),
  ];
  const urls = pairs.flatMap(([tr, en]) => [tr, en].map((loc) => `  <url>
    <loc>${SITE}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${SITE}${tr}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/>
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}

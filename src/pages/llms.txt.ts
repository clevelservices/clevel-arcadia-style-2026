import { services, servicePath } from '../data/services';
import { routes, SITE, EMAIL, CALENDAR_URL, SOCIAL } from '../i18n/ui';

/** Plain-text summary for AI assistants (llmstxt.org), generated from the same data as the pages. */
export function GET() {
  const svc = (lang: 'tr' | 'en') =>
    services
      .map((s) => `### ${s.title[lang]}\n${SITE}${servicePath(s, lang)}\n${s.lead[lang]}\n${lang === 'tr' ? 'Anahtar konular' : 'Key topics'}: ${s.keywords[lang].join(', ')}\n${s.subs.map((x) => `- ${x.t[lang]}: ${x.d[lang]}`).join('\n')}`)
      .join('\n\n');
  const body = `# C-Level Services (Clevel Services Danışmanlık A.Ş.)

> C-Level Services, Türkiye merkezli bir danışmanlık şirketidir. Ana hizmeti kaynak geliştirme danışmanlığıdır: kamu hibeleri (TÜBİTAK, KOSGEB, kalkınma ajansları, bakanlık programları), yatırım teşvikleri ve sübvansiyonlu krediler. Ayrıca Turquality kapsamında süreç ve kurumsallaşma, yatırım fizibilitesi, dijital dönüşüm ve yeşil dönüşüm danışmanlığı verir. Ekip finans, pazarlama, yatırım, bilişim sistemleri, proje yönetimi ve vergi alanlarında deneyimli profesyonellerden oluşur.

> C-Level Services is a Turkey-based advisory firm. Its core service is funding advisory: Turkish public grants (TÜBİTAK, KOSGEB, development agencies, ministry programmes), investment incentives and subsidised loans. It also advises on process and governance under Turquality, investment feasibility, digital transformation and green transition (carbon footprint, CBAM). Works in Turkish and English.

İletişim / Contact: ${EMAIL} · ${CALENDAR_URL}${SOCIAL.linkedin ? ` · ${SOCIAL.linkedin}` : ''}

## Hizmetler (Türkçe)
${SITE}${routes.services.tr}

${svc('tr')}

## Services (English)
${SITE}${routes.services.en}

${svc('en')}

## Sayfalar / Pages
- ${SITE}${routes.about.tr} | ${SITE}${routes.about.en}
- ${SITE}${routes.contact.tr} | ${SITE}${routes.contact.en}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

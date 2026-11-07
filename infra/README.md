# Altyapı notları

- `schema.sql`: D1 veritabanı (`clevel-site-db`) tabloları. Sayaç `counters`, iletişim talepleri `leads` tablosunda.
- `mailer/`: Kendin Yap Testi formundan gelen talepleri selman@clevel.services adresine e-postayla bildiren özel Worker (`clevel-mailer`). Cloudflare Workers Builds bu klasörden dağıtır. Site ona `MAILER` servis bağlantısıyla ulaşır; internete açık bir adresi yoktur.
- Gönderen adres `bildirim@cleveldanismanlik.com`; cleveldanismanlik.com alan adında Cloudflare Email Routing açık.

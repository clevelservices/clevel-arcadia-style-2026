import type { Lang } from '../i18n/ui';

type T = { tr: string; en: string };
export type Tone = 's1' | 's2' | 's3' | 's4' | 's5';
export type ToolId = 'funding' | 'turquality' | 'feasibility' | 'digital' | 'scopes';

export interface Sub { t: T; d: T }
export interface Service {
  id: 'kaynak' | 'surec' | 'fizibilite' | 'dijital' | 'yesil';
  tone: Tone;
  slug: T;
  title: T;
  /** Short name for plates and chips */
  name: T;
  short: T;
  lead: T;
  net: { center: T; nodes: T[] };
  subs: Sub[];
  tool: ToolId;
  toolTitle: T;
  toolIntro: T;
  toolNote: T;
}

export const services: Service[] = [
  {
    id: 'kaynak',
    tone: 's4',
    slug: { tr: 'kaynak-gelistirme', en: 'funding-advisory' },
    title: { tr: 'Kaynak Geliştirme Danışmanlığı', en: 'Funding Advisory' },
    name: { tr: 'Kaynak geliştirme', en: 'Funding' },
    short: {
      tr: 'Hibe, teşvik ve sübvansiyonlu kredilerle büyümenizin finansmanını kuruyoruz.',
      en: 'We finance your growth with grants, incentives and subsidised loans.',
    },
    lead: {
      tr: 'Ana işimiz kamu hibeleri, teşvikler ve faiz destekli krediler. Programı seçer, başvuruyu hazırlar, projeyi kapanışa kadar takip ederiz. Kamu kaynağının yetmediği yerde yatırımınıza uygun başka finansman seçeneklerini de araştırırız.',
      en: 'Our core work is public grants, incentives and interest-subsidised loans. We choose the programme, prepare the application and follow the project through to close-out. Where public funding is not enough, we also look for other financing that fits your investment.',
    },
    net: {
      center: { tr: 'Projeniz', en: 'Your project' },
      nodes: [
        { tr: 'TÜBİTAK', en: 'TÜBİTAK' },
        { tr: 'KOSGEB', en: 'KOSGEB' },
        { tr: 'Kalkınma ajansları', en: 'Development agencies' },
        { tr: 'Yatırım teşviki', en: 'Investment incentives' },
        { tr: 'Faiz destekli kredi', en: 'Subsidised loans' },
        { tr: 'Ar-Ge merkezi', en: 'R&D centres' },
      ],
    },
    subs: [
      {
        t: { tr: 'Hibe ve destek programları', en: 'Grants and support programmes' },
        d: {
          tr: 'TÜBİTAK, KOSGEB, kalkınma ajansları ve bakanlık programlarında doğru çağrıyı seçip başvuruyu hazırlarız.',
          en: 'We pick the right call across TÜBİTAK, KOSGEB, development agency and ministry programmes and prepare the application.',
        },
      },
      {
        t: { tr: 'Yatırım teşvikleri', en: 'Investment incentives' },
        d: {
          tr: 'Yatırım Teşvik Belgesi ile KDV istisnası, gümrük muafiyeti, vergi indirimi ve sigorta primi desteği gibi avantajlardan yararlanmanızı sağlarız.',
          en: 'With an Investment Incentive Certificate you can benefit from VAT exemption, customs duty exemption, tax reductions and social security support.',
        },
      },
      {
        t: { tr: 'Sübvansiyonlu krediler', en: 'Subsidised loans' },
        d: {
          tr: 'KOSGEB, Türk Eximbank ve kamu destekli kefalet sistemi üzerinden faiz yükü düşürülmüş kredilere erişimi planlarız.',
          en: 'We plan access to lower-interest loans through KOSGEB, Türk Eximbank and the state-backed credit guarantee system.',
        },
      },
      {
        t: { tr: 'Ar-Ge, Tasarım Merkezi ve teknopark', en: 'R&D, design centres and technoparks' },
        d: {
          tr: 'Ar-Ge ve Tasarım Merkezi, teknopark ve TÜR Belgesi başvurularını ve yükümlülüklerini yönetiriz.',
          en: 'We handle R&D and Design Centre, technopark and Technology Product Certificate applications and their obligations.',
        },
      },
      {
        t: { tr: 'Uygulama ve kapanış', en: 'Implementation and close-out' },
        d: {
          tr: 'Harcama, belge ve raporları proje boyunca düzenli tutar, onaylanan desteğin gerçekten ödenmesini sağlarız.',
          en: 'We keep spending, records and reports in order throughout, so the approved funding is actually paid.',
        },
      },
      {
        t: { tr: 'Alternatif finansman', en: 'Alternative financing' },
        d: {
          tr: 'Kamu kaynağı yetmediğinde yatırımınıza uygun başka finansman seçeneklerini araştırırız.',
          en: 'Where public funding falls short, we look for other financing that suits your investment.',
        },
      },
    ],
    tool: 'funding',
    toolTitle: { tr: 'Kendin Yap Testi', en: 'Do-it-yourself check' },
    toolIntro: {
      tr: 'Yapay zekayla artık herkes başvuru metni yazabiliyor. En fazla sekiz soruda, bunun sizin için yeterli olup olmadığını görün. Sonuç “yapabilirsiniz” çıkarsa bunu açıkça söyleriz.',
      en: 'With AI, anyone can now write an application. In up to eight questions, see whether that is enough for you. If the answer is “you can”, we say so plainly.',
    },
    toolNote: {
      tr: 'Yanıtlarınız yalnızca tarayıcınızda işlenir, hiçbir yere gönderilmez. Test genel bir ön değerlendirmedir; program koşulları değişebilir.',
      en: 'Your answers are processed only in your browser and never sent anywhere. This is a general first assessment; programme conditions change.',
    },
  },
  {
    id: 'surec',
    tone: 's2',
    slug: { tr: 'surec-ve-kurumsallasma', en: 'process-and-governance' },
    title: { tr: 'Süreç ve Kurumsallaşma Danışmanlığı', en: 'Process and Governance Advisory' },
    name: { tr: 'Süreç ve kurumsallaşma', en: 'Process and governance' },
    short: {
      tr: 'Turquality yolculuğunda markanızı ve şirketinizi programın beklediği kurumsal yapıya hazırlıyoruz.',
      en: 'We prepare your brand and company for the corporate structure the Turquality programme expects.',
    },
    lead: {
      tr: 'Bu hizmeti Turquality ve Marka Destek Programı kapsamında veriyoruz. Programa girmek kadar, program süresince kurumsal gelişimi sürdürmek ve harcamaları doğru raporlamak da belirleyici.',
      en: 'We provide this service within the Turquality and Brand Support programmes. Getting in matters, but so does keeping up institutional development and reporting spending correctly throughout the programme.',
    },
    net: {
      center: { tr: 'Turquality', en: 'Turquality' },
      nodes: [
        { tr: 'Marka', en: 'Brand' },
        { tr: 'Strateji', en: 'Strategy' },
        { tr: 'Organizasyon', en: 'Organisation' },
        { tr: 'Süreçler', en: 'Processes' },
        { tr: 'Raporlama', en: 'Reporting' },
        { tr: 'Yurt dışı pazar', en: 'Export markets' },
      ],
    },
    subs: [
      {
        t: { tr: 'Turquality ve Marka Destek başvurusu', en: 'Turquality and Brand Support application' },
        d: {
          tr: 'Programa uygunluğu değerlendirir, başvuru dosyasını ve gerekli belgeleri hazırlarız.',
          en: 'We assess eligibility and prepare the application file and supporting documents.',
        },
      },
      {
        t: { tr: 'Mevcut durum analizi', en: 'Current-state review' },
        d: {
          tr: 'Markanızın, organizasyonunuzun ve süreçlerinizin bugünkü durumunu programın beklentileriyle karşılaştırırız.',
          en: 'We compare your brand, organisation and processes today with what the programme expects.',
        },
      },
      {
        t: { tr: 'Strateji ve iş planı', en: 'Strategy and business plan' },
        d: {
          tr: 'Hedef pazarları, büyüme hedeflerini ve bütçeyi kapsayan orta vadeli planı birlikte yazarız.',
          en: 'We write a medium-term plan with you covering target markets, growth goals and budget.',
        },
      },
      {
        t: { tr: 'Organizasyon ve süreç tasarımı', en: 'Organisation and process design' },
        d: {
          tr: 'Organizasyon şemasını, görev tanımlarını ve temel iş süreçlerini programın aradığı düzene getiririz.',
          en: 'We bring your organisation chart, job descriptions and core processes into the shape the programme looks for.',
        },
      },
      {
        t: { tr: 'Program dönemi takibi', en: 'Programme follow-up' },
        d: {
          tr: 'Kurumsallaşma yol haritasını, destek harcamalarını ve dönem raporlarını program boyunca takip ederiz.',
          en: 'We track the development roadmap, supported spending and period reports throughout the programme.',
        },
      },
    ],
    tool: 'turquality',
    toolTitle: { tr: 'Turquality hazırlık ölçer', en: 'Turquality readiness gauge' },
    toolIntro: {
      tr: 'Size uyan ifadeleri işaretleyin. Altıgen doldukça, başvuru dosyasını kendi ekibinizle hazırlamaya yaklaşırsınız.',
      en: 'Tick the statements that apply. The fuller the hexagon, the closer you are to preparing the application with your own team.',
    },
    toolNote: {
      tr: 'Ölçer kurumsal hazırlığın genel göstergelerine bakar; Turquality’nin resmi başvuru kriterleri değildir. Güncel koşullar Ticaret Bakanlığı tarafından belirlenir.',
      en: 'The gauge looks at general signs of readiness; these are not Turquality’s official criteria. Current conditions are set by the Ministry of Trade.',
    },
  },
  {
    id: 'fizibilite',
    tone: 's3',
    slug: { tr: 'yatirim-fizibilitesi', en: 'investment-feasibility' },
    title: { tr: 'Yatırım Fizibilitesi Danışmanlığı', en: 'Investment Feasibility Advisory' },
    name: { tr: 'Yatırım fizibilitesi', en: 'Investment feasibility' },
    short: {
      tr: 'Teşvik belgesi, kamu projesi, banka kredisi ya da pazara giriş kararı için yatırımın sayısal gerekçesini hazırlıyoruz.',
      en: 'We build the numerical case for an investment: for an incentive certificate, a public project, a bank loan or a market-entry decision.',
    },
    lead: {
      tr: 'Fizibiliteyi çoğunlukla Yatırım Teşvik Belgesi ve kamu destekli projeler için hazırlıyoruz. Teşvikten bağımsız da çalışıyoruz: bankaların proje finansmanı için istediği raporları ve Türkiye’ye yatırım düşünen yabancı firmalar için pazar araştırmalarını da yapıyoruz.',
      en: 'We mostly prepare feasibility studies for Investment Incentive Certificates and publicly funded projects. We also work independently of incentives: bank reports for project finance, and market research for foreign companies considering Turkey.',
    },
    net: {
      center: { tr: 'Karar', en: 'Decision' },
      nodes: [
        { tr: 'Pazar', en: 'Market' },
        { tr: 'Talep', en: 'Demand' },
        { tr: 'Yatırım tutarı', en: 'Capex' },
        { tr: 'Finansman', en: 'Financing' },
        { tr: 'Nakit akışı', en: 'Cash flow' },
        { tr: 'Risk', en: 'Risk' },
      ],
    },
    subs: [
      {
        t: { tr: 'Teşvik belgesi fizibilitesi', en: 'Incentive certificate studies' },
        d: {
          tr: 'Yatırım Teşvik Belgesi başvurusu için gereken proje ve finansal analizi hazırlarız.',
          en: 'We prepare the project and financial analysis an Investment Incentive Certificate application needs.',
        },
      },
      {
        t: { tr: 'Kamu projeleri', en: 'Public projects' },
        d: {
          tr: 'Kalkınma ajansı ve uluslararası kaynaklı programların istediği fizibilite formatlarında çalışırız.',
          en: 'We work in the formats required by development agencies and internationally funded programmes.',
        },
      },
      {
        t: { tr: 'Banka proje finansmanı', en: 'Bank project finance' },
        d: {
          tr: 'Bankanın kredi değerlendirmesinde baktığı nakit akışı ve duyarlılık analizlerini raporlarız.',
          en: 'We report the cash-flow and sensitivity analysis a bank looks at when assessing a loan.',
        },
      },
      {
        t: { tr: 'Pazar araştırması', en: 'Market research' },
        d: {
          tr: 'Türkiye’de yatırım ya da satış düşünen yabancı firmalar için pazar büyüklüğü, rakip ve talep analizi yaparız.',
          en: 'For foreign companies considering Turkey, we analyse market size, competitors and demand.',
        },
      },
      {
        t: { tr: 'Finansal model', en: 'Financial model' },
        d: {
          tr: 'Gelir, maliyet, finansman ve teşvik etkisini tek bir modelde, senaryolarla birlikte kurarız.',
          en: 'We bring revenue, costs, financing and the effect of incentives into one model, with scenarios.',
        },
      },
    ],
    tool: 'feasibility',
    toolTitle: { tr: 'Geri ödeme hesaplayıcı', en: 'Payback calculator' },
    toolIntro: {
      tr: 'Birkaç sayı girin; teşvikli ve teşviksiz geri ödeme süresini yan yana görün.',
      en: 'Enter a few numbers and see payback with and without incentives side by side.',
    },
    toolNote: {
      tr: 'Bu hesap gerçek bir fizibilitenin yalnızca son satırıdır. Banka ve Bakanlık; talep varsayımlarını, duyarlılık analizini, finansman yapısını ve teşvik kalemlerinin tek tek hesabını görmek ister.',
      en: 'This is only the last line of a real feasibility study. Banks and ministries want to see demand assumptions, sensitivity analysis, financing structure and each incentive calculated line by line.',
    },
  },
  {
    id: 'dijital',
    tone: 's1',
    slug: { tr: 'dijital-donusum', en: 'digital-transformation' },
    title: { tr: 'Dijital Dönüşüm Danışmanlığı', en: 'Digital Transformation Advisory' },
    name: { tr: 'Dijital dönüşüm', en: 'Digital transformation' },
    short: {
      tr: 'İş süreçlerinizi ve üretiminizi yazılım, donanım ve güvenlik çözümleriyle dijitalleştiriyoruz.',
      en: 'We digitise your processes and production with software, hardware and security solutions.',
    },
    lead: {
      tr: 'Web ya da mobil uygulama yaptırmaktan fabrikada üretim verisini toplamaya kadar sistem, donanım, yazılım ve güvenlik tarafında çözüm kuruyoruz. Uygun projelerde Sanayi ve Teknoloji Bakanlığı Dijital Dönüşüm Destek Programı’ndan yararlanmanızı da sağlıyoruz.',
      en: 'From building a web or mobile app to collecting production data on the factory floor, we deliver systems, hardware, software and security. Where it fits, we also help you use the Ministry of Industry and Technology’s Digital Transformation Support Programme.',
    },
    net: {
      center: { tr: 'İşletmeniz', en: 'Your business' },
      nodes: [
        { tr: 'ERP', en: 'ERP' },
        { tr: 'MES', en: 'MES' },
        { tr: 'IoT', en: 'IoT' },
        { tr: 'Robotik', en: 'Robotics' },
        { tr: 'Mobil uygulama', en: 'Mobile apps' },
        { tr: 'Siber güvenlik', en: 'Cybersecurity' },
      ],
    },
    subs: [
      {
        t: { tr: 'Web ve mobil uygulamalar', en: 'Web and mobile apps' },
        d: {
          tr: 'İş süreçlerinizi kolaylaştıran web ve mobil uygulamaları tasarlar ve geliştiririz.',
          en: 'We design and build web and mobile apps that make your processes easier.',
        },
      },
      {
        t: { tr: 'Üretimde dijitalleşme', en: 'Digital production' },
        d: {
          tr: 'MES, SCADA, sensör ve makine verisiyle üretimi izlenebilir ve ölçülebilir hale getiririz.',
          en: 'With MES, SCADA, sensors and machine data we make production visible and measurable.',
        },
      },
      {
        t: { tr: 'Kurumsal yazılımlar', en: 'Enterprise software' },
        d: {
          tr: 'ERP, CRM ve PLM gibi sistemlerin seçimi, kurulumu ve entegrasyonunda yanınızdayız.',
          en: 'We help you choose, set up and integrate systems such as ERP, CRM and PLM.',
        },
      },
      {
        t: { tr: 'Otomasyon ve donanım', en: 'Automation and hardware' },
        d: {
          tr: 'Robotik otomasyon, makine görmesi ve endüstriyel ağ altyapısını planlarız.',
          en: 'We plan robotic automation, machine vision and industrial network infrastructure.',
        },
      },
      {
        t: { tr: 'Siber güvenlik', en: 'Cybersecurity' },
        d: {
          tr: 'Ofis ve üretim sistemlerinizi siber tehditlere karşı korumak için gereken önlemleri kurarız.',
          en: 'We put in place the measures that protect your office and production systems from cyber threats.',
        },
      },
      {
        t: { tr: 'Dijital Dönüşüm Destek Programı', en: 'Digital Transformation Support Programme' },
        d: {
          tr: 'Uygun ürünler için Bakanlığın dijital dönüşüm desteğine başvuruyu hazırlarız.',
          en: 'For eligible products we prepare the application to the ministry’s digital transformation support.',
        },
      },
    ],
    tool: 'digital',
    toolTitle: { tr: 'Dijital olgunluk haritası', en: 'Digital maturity map' },
    toolIntro: {
      tr: 'Her alan için bugünkü durumunuzu seçin. Harita, hangi çözümlerin önce geleceğini gösterir.',
      en: 'Pick where you are today in each area. The map shows which solutions come first.',
    },
    toolNote: {
      tr: 'Bir uygulama yaptırmak artık kolay. Zor olan, onu üretimin ve ekibin gerçek akışına oturtmak, sonra da yaşatmak. Önerilen çözümlerin önemli kısmı Dijital Dönüşüm Destek Programı kapsamına girebilir; güncel ürün listesini birlikte kontrol ederiz.',
      en: 'Building an app is easy now. The hard part is fitting it into how production and people really work, and keeping it alive afterwards. Many of the suggested solutions may qualify for the Digital Transformation Support Programme; we check the current product list together.',
    },
  },
  {
    id: 'yesil',
    tone: 's5',
    slug: { tr: 'yesil-donusum', en: 'green-transition' },
    title: { tr: 'Yeşil Dönüşüm Danışmanlığı', en: 'Green Transition Advisory' },
    name: { tr: 'Yeşil dönüşüm', en: 'Green transition' },
    short: {
      tr: 'Karbon ayak izinizi ölçüyor, SKDM ve sürdürülebilirlik raporlamasına hazırlıyoruz.',
      en: 'We measure your carbon footprint and prepare you for CBAM and sustainability reporting.',
    },
    lead: {
      tr: 'Avrupa Birliği’ne ihracat yapan ve büyük müşterilere tedarik sağlayan şirketlerden artık emisyon verisi isteniyor. Ölçümden azaltım planına, SKDM bildiriminden sürdürülebilirlik raporuna kadar süreci uluslararası standartlara uygun yürütüyoruz.',
      en: 'Companies that export to the EU or supply large customers are now asked for emissions data. From measurement to reduction plans, from CBAM declarations to sustainability reports, we run the process to international standards.',
    },
    net: {
      center: { tr: 'Karbon ayak izi', en: 'Carbon footprint' },
      nodes: [
        { tr: 'Kapsam 1', en: 'Scope 1' },
        { tr: 'Kapsam 2', en: 'Scope 2' },
        { tr: 'Kapsam 3', en: 'Scope 3' },
        { tr: 'SKDM', en: 'CBAM' },
        { tr: 'Su ayak izi', en: 'Water footprint' },
        { tr: 'Net sıfır', en: 'Net zero' },
      ],
    },
    subs: [
      {
        t: { tr: 'Kurumsal karbon ayak izi', en: 'Corporate carbon footprint' },
        d: {
          tr: 'Kapsam 1, 2 ve 3 emisyonlarını GHG Protokolü ve ISO 14064’e göre hesaplar, raporlarız.',
          en: 'We calculate and report Scope 1, 2 and 3 emissions under the GHG Protocol and ISO 14064.',
        },
      },
      {
        t: { tr: 'Ürün karbon ayak izi', en: 'Product carbon footprint' },
        d: {
          tr: 'Ürünlerinizin yaşam döngüsü boyunca oluşan emisyonları hesaplarız.',
          en: 'We calculate the emissions your products create across their life cycle.',
        },
      },
      {
        t: { tr: 'SKDM (CBAM) raporlaması', en: 'CBAM reporting' },
        d: {
          tr: 'AB Sınırda Karbon Düzenleme Mekanizması kapsamındaki bildirimlerinize hazırlanmanızı sağlarız.',
          en: 'We prepare you for declarations under the EU Carbon Border Adjustment Mechanism.',
        },
      },
      {
        t: { tr: 'Su ayak izi', en: 'Water footprint' },
        d: {
          tr: 'Su kullanımınızı ISO 14046’ya uygun olarak hesaplar ve raporlarız.',
          en: 'We calculate and report your water use in line with ISO 14046.',
        },
      },
      {
        t: { tr: 'ESG ve sürdürülebilirlik raporu', en: 'ESG and sustainability reporting' },
        d: {
          tr: 'ESG boşluk analizi yapar, TSRS ve GRI gibi çerçevelere uygun rapor hazırlarız.',
          en: 'We run an ESG gap analysis and prepare reports in line with frameworks such as TSRS and GRI.',
        },
      },
      {
        t: { tr: 'Azaltım ve net sıfır', en: 'Reduction and net zero' },
        d: {
          tr: 'Bilime dayalı hedefleri, azaltım planını, karbon denkleştirme ve I-REC seçeneklerini planlarız.',
          en: 'We plan science-based targets, reduction measures, carbon offsetting and I-REC options.',
        },
      },
    ],
    tool: 'scopes',
    toolTitle: { tr: 'Kapsam oyunu', en: 'Scope sorter' },
    toolIntro: {
      tr: 'Emisyon kaynaklarını doğru kapsama sürükleyin ya da seçip kutuya dokunun. Karbon ayak izinin ilk adımı, neyin hangi kapsama girdiğini bilmek.',
      en: 'Drag each emission source to the right scope, or select it and tap a box. The first step of a carbon footprint is knowing what belongs where.',
    },
    toolNote: {
      tr: 'Kapsamı bilmek ilk adım. Asıl iş doğru emisyon faktörlerini seçmek, tedarik zincirinden veri toplamak ve hesabı doğrulanabilir tutmak.',
      en: 'Knowing the scopes is the first step. The real work is choosing the right emission factors, collecting supply-chain data and keeping the calculation verifiable.',
    },
  },
];

export function servicePath(s: Service, lang: Lang) {
  return lang === 'tr' ? `/hizmetler/${s.slug.tr}/` : `/en/services/${s.slug.en}/`;
}

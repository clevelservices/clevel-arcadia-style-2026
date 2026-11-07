import type { Lang } from '../i18n/ui';

type T = { tr: string; en: string };
export type Tone = 's1' | 's2' | 's3' | 's4' | 's5';
export type ToolId = 'funding' | 'turquality' | 'feasibility' | 'digital' | 'scopes';

export interface Sub { t: T; d: T }
export interface Seo { title: T; description: T }
export interface Keywords { tr: string[]; en: string[] }
export interface Service {
  id: 'kaynak' | 'surec' | 'fizibilite' | 'dijital' | 'yesil';
  tone: Tone;
  slug: T;
  title: T;
  /** Short name for plates and chips */
  name: T;
  short: T;
  /** <title> and meta description, written around the search terms people actually use */
  seo: Seo;
  /** Search terms this page should rank for (schema.org keywords, llms.txt) */
  keywords: Keywords;
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
    seo: {
      title: { tr: 'Hibe ve Teşvik Danışmanlığı | KOSGEB, TÜBİTAK Proje Danışmanlığı', en: 'Grant and Incentive Advisory in Turkey | KOSGEB, TÜBİTAK' },
      description: {
        tr: 'Hibe danışmanlığı, teşvik danışmanlığı, KOSGEB ve TÜBİTAK proje danışmanlığı, ihracat ve e-ihracat destekleri, KOSGEB kredisi, iş kurma ve girişimci destekleri.',
        en: 'Grant and incentive advisory in Turkey: KOSGEB and TÜBİTAK projects, export and e-export support, subsidised loans, start-up and entrepreneur support.',
      },
    },
    keywords: {
      tr: ['hibe danışmanlığı', 'teşvik danışmanlığı', 'ihracat destekleri', 'e-ihracat destekleri', 'KOSGEB proje danışmanlığı', 'TÜBİTAK proje danışmanlığı', 'küresel rekabetçilik', 'kapasite geliştirme', 'girişimcilik desteği', 'teknoyatırım', 'dijital dönüşüm desteği', 'KOSGEB kredisi', 'iş kurma desteği', 'kadın girişimci desteği', 'genç girişimci desteği'],
      en: ['grant advisory Turkey', 'incentive advisory Turkey', 'export support', 'e-export support', 'KOSGEB project consultancy', 'TÜBİTAK project consultancy', 'global competitiveness', 'capacity building', 'entrepreneurship support', 'KOSGEB loan', 'start-up support', 'women entrepreneur support', 'young entrepreneur support'],
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
          tr: 'TÜBİTAK ve KOSGEB projelerinde, kalkınma ajansı ve bakanlık programlarında doğru çağrıyı seçer, başvuruyu hazırlarız.',
          en: 'We pick the right call across TÜBİTAK, KOSGEB, development agency and ministry programmes and prepare the application.',
        },
      },
      {
        t: { tr: 'Girişimcilik destekleri', en: 'Entrepreneurship support' },
        d: {
          tr: 'İş kurma desteği, kadın girişimci ve genç girişimci destekleri gibi programlarla yeni işletmenizin ilk yatırımına kaynak buluruz.',
          en: 'We find funding for a new company’s first investment through start-up, women entrepreneur and young entrepreneur programmes.',
        },
      },
      {
        t: { tr: 'İhracat ve e-ihracat destekleri', en: 'Export and e-export support' },
        d: {
          tr: 'Yurt dışı pazarlama, fuar, pazar araştırması ve e-ihracat harcamalarınız için devlet desteklerinden yararlanmanızı sağlarız.',
          en: 'We help you use state support for overseas marketing, trade fairs, market research and e-export spending.',
        },
      },
      {
        t: { tr: 'Kapasite geliştirme ve küresel rekabetçilik', en: 'Capacity building and global competitiveness' },
        d: {
          tr: 'İşletmenizin ya da sektörünüzün rekabet gücünü artıran kapasite geliştirme projelerini kurgular, başvuruyu hazırlarız.',
          en: 'We design capacity-building projects that raise the competitiveness of your company or sector, and prepare the application.',
        },
      },
      {
        t: { tr: 'Yatırım teşvikleri ve Teknoyatırım', en: 'Investment incentives' },
        d: {
          tr: 'Yatırım Teşvik Belgesi ve Teknoyatırım gibi teknoloji odaklı programlarla KDV istisnası, gümrük muafiyeti, vergi indirimi ve sigorta primi desteğinden yararlanmanızı sağlarız.',
          en: 'With an Investment Incentive Certificate and technology-focused programmes you can benefit from VAT and customs exemptions, tax reductions and social security support.',
        },
      },
      {
        t: { tr: 'KOSGEB kredisi ve sübvansiyonlu krediler', en: 'Subsidised loans' },
        d: {
          tr: 'KOSGEB kredisi, Türk Eximbank ve kamu destekli kefalet sistemi üzerinden faiz yükü düşürülmüş kredilere erişimi planlarız.',
          en: 'We plan access to lower-interest loans through KOSGEB, Türk Eximbank and the state-backed credit guarantee system.',
        },
      },
      {
        t: { tr: 'Dijital ve yeşil dönüşüm destekleri', en: 'Digital and green transition funding' },
        d: {
          tr: 'Dijital dönüşüm ve yeşil dönüşüm yatırımlarınız için uygun hibe ve kredi programlarını belirler, başvuruyu yönetiriz.',
          en: 'We identify grant and loan programmes for your digital and green transition investments and manage the application.',
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
      tr: 'Turquality danışmanlığı: markanızı ve şirketinizi programın beklediği kurumsal yapıya hazırlıyoruz.',
      en: 'We prepare your brand and company for the corporate structure the Turquality programme expects.',
    },
    seo: {
      title: { tr: 'Turquality Danışmanlığı | Süreç ve Kurumsallaşma', en: 'Turquality Consultancy | Process and Governance' },
      description: {
        tr: 'Turquality danışmanlığı: Turquality ve Marka Destek Programı başvurusu, kurumsallaşma, strateji, süreç tasarımı ve program dönemi raporlaması.',
        en: 'Turquality consultancy: Turquality and Brand Support applications, governance, strategy, process design and programme-period reporting.',
      },
    },
    keywords: {
      tr: ['Turquality danışmanlığı', 'Turquality başvurusu', 'Marka Destek Programı', 'kurumsallaşma danışmanlığı', 'süreç danışmanlığı'],
      en: ['Turquality consultancy', 'Turquality application', 'Brand Support Programme', 'corporate governance advisory'],
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
    seo: {
      title: { tr: 'Fizibilite Raporu ve Yatırım Teşvik Belgesi Danışmanlığı', en: 'Feasibility Studies and Investment Incentive Certificates in Turkey' },
      description: {
        tr: 'Yatırım Teşvik Belgesi, kamu destekli projeler ve banka proje finansmanı için fizibilite raporu; Türkiye’ye yatırım yapacak firmalar için pazar araştırması.',
        en: 'Feasibility studies for Investment Incentive Certificates, public projects and bank project finance, plus market research for companies investing in Turkey.',
      },
    },
    keywords: {
      tr: ['fizibilite raporu', 'yatırım teşvik belgesi', 'yatırım fizibilitesi', 'proje finansmanı', 'pazar araştırması'],
      en: ['feasibility study Turkey', 'investment incentive certificate', 'project finance report', 'market research Turkey'],
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
      tr: 'Dijitalleşmeyle verimliliği artırıyoruz: üretimden lojistiğe, kaliteden siber güvenliğe kadar yazılım, donanım ve uygulama çözümleri.',
      en: 'We raise productivity through digitalisation: software, hardware and apps from production to logistics, quality to cybersecurity.',
    },
    seo: {
      title: { tr: 'Dijital Dönüşüm Danışmanlığı | Dijitalleşme ve Verimlilik', en: 'Digital Transformation Advisory | Digitalisation and Productivity' },
      description: {
        tr: 'Dijital dönüşüm ve dijitalleşme ile verimlilik: akıllı üretim, kalite ve izlenebilirlik, üretim yazılımları, siber güvenlik, lojistik ve web/mobil uygulamalar.',
        en: 'Digital transformation for productivity: smart manufacturing, quality and traceability, production software, cybersecurity, logistics and web/mobile apps.',
      },
    },
    keywords: {
      tr: ['dijital dönüşüm', 'dijitalleşme', 'verimlilik', 'dijital dönüşüm destek programı', 'akıllı üretim', 'endüstriyel nesnelerin interneti', 'mobil uygulama geliştirme'],
      en: ['digital transformation', 'digitalisation', 'productivity', 'smart manufacturing', 'industrial IoT', 'mobile app development'],
    },
    lead: {
      tr: 'Dijital dönüşümü bir yazılım satın almak değil, verimliliği ölçülebilir biçimde artırmak olarak görüyoruz. İhtiyacı belirler, çözümü kurar ve çalışır halde bırakırız; uygun yatırımlarda Dijital Dönüşüm Destek Programı’ndan yararlanmanızı sağlarız.',
      en: 'We see digital transformation not as buying software but as raising productivity in a way you can measure. We define the need, put the solution in place and leave it running, and where the investment qualifies we help you use the Digital Transformation Support Programme.',
    },
    net: {
      center: { tr: 'İşletmeniz', en: 'Your business' },
      nodes: [
        { tr: 'Akıllı üretim', en: 'Smart production' },
        { tr: 'Kalite', en: 'Quality' },
        { tr: 'Veri ve yapay zekâ', en: 'Data and AI' },
        { tr: 'Lojistik', en: 'Logistics' },
        { tr: 'Mobil uygulama', en: 'Mobile apps' },
        { tr: 'Siber güvenlik', en: 'Cybersecurity' },
      ],
    },
    subs: [
      {
        t: { tr: 'Web ve mobil uygulamalar', en: 'Web and mobile apps' },
        d: {
          tr: 'İş süreçlerinizi kolaylaştıran web ve mobil uygulamaları tasarlar, geliştirir ve yayında tutarız.',
          en: 'We design, build and keep running web and mobile apps that make your processes easier.',
        },
      },
      {
        t: { tr: 'Akıllı üretim ve otomasyon', en: 'Smart production and automation' },
        d: {
          tr: 'Robotlar, işbirlikçi robotlar, katmanlı imalat ve otonom taşıma ile üretimi otomatikleştirir; mevcut makineleri sensörlerle bağlanabilir hale getiririz.',
          en: 'We automate production with robots, collaborative robots, additive manufacturing and autonomous handling, and connect existing machines with sensors.',
        },
      },
      {
        t: { tr: 'Kalite ve izlenebilirlik', en: 'Quality and traceability' },
        d: {
          tr: 'Görüntü işlemeyle kalite kontrol, malzeme muayenesi ve parti bazında izlenebilirlik sistemleri kurarız.',
          en: 'We set up machine-vision quality control, material inspection and batch-level traceability.',
        },
      },
      {
        t: { tr: 'Üretim yazılımları, veri ve yapay zekâ', en: 'Production software, data and AI' },
        d: {
          tr: 'Üretim ve bakım yönetimi, makine izleme, veri analitiği, simülasyon, yapay zekâ, süreç madenciliği ve dijital iş talimatlarıyla kararları veriye dayandırırız.',
          en: 'With production and maintenance management, machine monitoring, analytics, simulation, AI, process mining and digital work instructions, decisions rest on data.',
        },
      },
      {
        t: { tr: 'Siber güvenlik ve ağ altyapısı', en: 'Cybersecurity and networks' },
        d: {
          tr: 'Fabrika genelinde kesintisiz ağ bağlantısını kurar; ağları, verileri ve makineleri siber saldırılara ve yetkisiz erişime karşı koruruz.',
          en: 'We build reliable site-wide connectivity and protect networks, data and machines from cyber attacks and unauthorised access.',
        },
      },
      {
        t: { tr: 'İş güvenliği ve risk yönetimi', en: 'Safety and risk management' },
        d: {
          tr: 'Acil durum ve afet izleme, akıllı tesis güvenliği ve çalışan sağlığı için uyarı veren akıllı sistemleri planlarız.',
          en: 'We plan emergency and disaster monitoring, smart site security and smart systems that warn about risks to workers.',
        },
      },
      {
        t: { tr: 'Tedarik ve lojistikte dijitalleşme', en: 'Digital supply chain and logistics' },
        d: {
          tr: 'Ürün takibi, talep tahmini, otomatik envanter ve depo yönetimi, yakıtı ve karbon emisyonunu azaltan rota ve yük planlaması kurarız.',
          en: 'We set up shipment tracking, demand forecasting, automated inventory and warehouse management, and route and load planning that cuts fuel and emissions.',
        },
      },
      {
        t: { tr: 'Dijital Dönüşüm Destek Programı', en: 'Digital Transformation Support Programme' },
        d: {
          tr: 'Yatırımınızın programa uygunluğunu değerlendirir, başvuruyu ve gider gerekçelerini hazırlarız.',
          en: 'We assess whether your investment qualifies and prepare the application and cost justification.',
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
      tr: 'Bir uygulama yaptırmak artık kolay. Zor olan, onu üretimin ve ekibin gerçek akışına oturtmak, sonra da yaşatmak. Önerilen çözümlerin önemli kısmı Dijital Dönüşüm Destek Programı kapsamına girebilir; hangilerinin uygun olduğunu birlikte değerlendiririz.',
      en: 'Building an app is easy now. The hard part is fitting it into how production and people really work, and keeping it alive afterwards. Many of the suggested solutions may qualify for the Digital Transformation Support Programme; we assess together which ones do.',
    },
  },
  {
    id: 'yesil',
    tone: 's5',
    slug: { tr: 'yesil-donusum', en: 'green-transition' },
    title: { tr: 'Yeşil Dönüşüm Danışmanlığı', en: 'Green Transition Advisory' },
    name: { tr: 'Yeşil dönüşüm', en: 'Green transition' },
    short: {
      tr: 'Karbon ayak izi hesaplama ve SKDM raporlamasıyla şirketinizi yeşil dönüşüme hazırlıyoruz.',
      en: 'We measure your carbon footprint and prepare you for CBAM and sustainability reporting.',
    },
    seo: {
      title: { tr: 'Karbon Ayak İzi Hesaplama ve SKDM Raporlama | Yeşil Dönüşüm', en: 'Carbon Footprint Calculation and CBAM Reporting | Green Transition' },
      description: {
        tr: 'Karbon ayak izi hesaplama (Kapsam 1, 2, 3), SKDM raporlama, ürün ve su ayak izi, ESG ve sürdürülebilirlik raporu, azaltım ve net sıfır planı.',
        en: 'Carbon footprint calculation (Scope 1, 2, 3), CBAM reporting, product and water footprints, ESG and sustainability reports, reduction and net-zero plans.',
      },
    },
    keywords: {
      tr: ['karbon ayak izi hesaplama', 'SKDM raporlama', 'SKDM', 'yeşil dönüşüm', 'sürdürülebilirlik raporu', 'ESG'],
      en: ['carbon footprint calculation', 'CBAM reporting', 'green transition', 'sustainability reporting', 'ESG'],
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

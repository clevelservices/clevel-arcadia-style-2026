/**
 * "Kendin Yap Testi" — rule-based self-check. Runs entirely in the browser; nothing is sent anywhere.
 * Each option can add readiness points (0–2), set a flag, or both.
 */
type T = { tr: string; en: string };

export interface Option {
  id: string;
  label: T;
  points?: number;
  flags?: string[];
}
export interface Question {
  id: string;
  title: T;
  help?: T;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 'stage',
    title: { tr: 'Şirketiniz hangi aşamada?', en: 'What stage is your company at?' },
    options: [
      { id: 'idea', label: { tr: 'Henüz kurulmadı, fikir aşamasında', en: 'Not founded yet, still an idea' }, flags: ['idea'] },
      { id: 'young', label: { tr: 'Kurulalı 3 yıldan az oldu', en: 'Founded less than 3 years ago' }, flags: ['young'] },
      { id: 'established', label: { tr: '3 yıldan uzun süredir faaliyette', en: 'Operating for more than 3 years' }, flags: ['established'] },
    ],
  },
  {
    id: 'goal',
    title: { tr: 'Hangi konuda destek arayışınız var?', en: 'What kind of support are you looking for?' },
    options: [
      { id: 'rd', label: { tr: 'Yeni bir ürün ya da teknoloji geliştirmek', en: 'Develop a new product or technology' }, flags: ['goal_rd'] },
      { id: 'commercial', label: { tr: 'Var olan ürünü büyütmek ve satmak', en: 'Grow and sell an existing product' }, flags: ['goal_commercial'] },
      { id: 'export', label: { tr: 'Yurt dışında tanıtım ve satış', en: 'Promote and sell abroad' }, flags: ['goal_export'] },
      { id: 'eexport', label: { tr: 'Yurt dışı pazaryerlerinde tanıtım ve komisyon', en: 'Promotion and commissions on overseas marketplaces' }, flags: ['goal_eexport'] },
      { id: 'digital', label: { tr: 'Üretimde ya da süreçlerde dijital dönüşüm', en: 'Digital transformation of production or processes' }, flags: ['goal_digital'] },
      { id: 'invest', label: { tr: 'Makine, tesis ya da kapasite yatırımı', en: 'Machinery, facility or capacity investment' }, flags: ['goal_invest'] },
      { id: 'credit', label: { tr: 'Uygun maliyetli kredi ya da finansman bulmak', en: 'Find low-cost loans or financing' }, flags: ['goal_credit'] },
    ],
  },
  {
    id: 'uncertainty',
    title: {
      tr: 'Projenizde çözümü henüz bilinmeyen teknik bir problem var mı?',
      en: 'Does your project involve a technical problem nobody has a known solution for yet?',
    },
    help: {
      tr: 'Ar-Ge desteklerinin temel şartı budur. “Bunu daha önce kimse yapmadı” değil, “nasıl yapılacağı belli değil” sorusudur.',
      en: 'This is the core requirement for R&D funding. The question is not “has anyone done this before?” but “is it unclear how it can be done?”',
    },
    options: [
      { id: 'clear', label: { tr: 'Evet, problemi ve denenecek yöntemi tarif edebilirim', en: 'Yes, I can describe the problem and the method to try' }, points: 2 },
      { id: 'vague', label: { tr: 'Bir şeyler var ama tarif etmekte zorlanırım', en: 'Something like that, but I’d struggle to describe it' }, points: 1, flags: ['vague_rd'] },
      { id: 'none', label: { tr: 'Hayır, bilinen teknolojiyi kullanıyoruz', en: 'No, we use known technology' }, points: 0, flags: ['no_rd'] },
    ],
  },
  {
    id: 'history',
    title: { tr: 'Daha önce kamu desteği aldınız mı?', en: 'Have you received public funding before?' },
    options: [
      { id: 'never', label: { tr: 'Hayır, ilk kez başvuracağız', en: 'No, this would be our first application' }, points: 0 },
      { id: 'smooth', label: { tr: 'Evet, sorunsuz tamamladık.', en: 'Yes, and we completed it without problems.' }, points: 2 },
      { id: 'troubled', label: { tr: 'Evet, ama rapor ya da ödemede sorun yaşadık', en: 'Yes, but we had problems with reports or payments' }, points: 0, flags: ['troubled'] },
    ],
  },
  {
    id: 'capacity',
    title: { tr: 'Başvuruyu ve takibi kim yapacak?', en: 'Who would write the application and follow it through?' },
    options: [
      { id: 'nobody', label: { tr: 'Belirli bir kişi yok, ben ya da ortaklarım', en: 'No one in particular, me or my partners' }, points: 0 },
      { id: 'accountant', label: { tr: 'Finans sorumlumuz', en: 'Our finance manager' }, points: 1, flags: ['accountant'] },
      { id: 'experienced', label: { tr: 'Daha önce proje yürütmüş bir çalışanımız', en: 'A staff member who has run funded projects before' }, points: 2 },
    ],
  },
  {
    id: 'time',
    title: { tr: 'Bu işe ayda kaç saat ayırabilirsiniz?', en: 'How many hours a month can you give this?' },
    help: {
      tr: 'Başvuru haftalarca, uygulama ve raporlama ise proje boyunca düzenli zaman ister.',
      en: 'The application takes weeks; implementation and reporting need regular time for the whole project.',
    },
    options: [
      { id: 'low', label: { tr: '8 saatten az', en: 'Less than 8 hours' }, points: 0, flags: ['low_time'] },
      { id: 'mid', label: { tr: '8–24 saat', en: '8–24 hours' }, points: 1 },
      { id: 'high', label: { tr: '24 saatten fazla', en: 'More than 24 hours' }, points: 2 },
    ],
  },
  {
    id: 'records',
    title: { tr: 'Faturalarınız ve ödemeleriniz ne kadar düzenli?', en: 'How orderly are your invoices and payments?' },
    help: {
      tr: 'Destekli projelerde ödemeler genellikle banka üzerinden yapılmalı ve her harcama belgelenmelidir.',
      en: 'On funded projects, payments usually have to go through a bank and every cost must be documented.',
    },
    options: [
      { id: 'tidy', label: { tr: 'Hepsi bankacılık sistemi üzerinden gerçekleşmektedir ve belgeler tamdır.', en: 'All payments go through the banking system and records are complete.' }, points: 2 },
      { id: 'partly', label: { tr: 'Çoğunlukla düzenli', en: 'Mostly in order' }, points: 1 },
      { id: 'messy', label: { tr: 'Nakit ödemeler ve eksik belgeler var', en: 'Some cash payments and missing records' }, points: 0, flags: ['messy'] },
    ],
  },
  {
    id: 'debts',
    title: { tr: 'Vadesi geçmiş vergi ya da SGK borcunuz var mı?', en: 'Do you have overdue tax or social security debts?' },
    help: {
      tr: 'Çoğu programda vadesi geçmiş borç olmaması ya da borcun yapılandırılmış olması aranır.',
      en: 'Most programmes require no overdue debt, or that the debt has been restructured.',
    },
    options: [
      { id: 'no', label: { tr: 'Hayır', en: 'No' } },
      { id: 'restructured', label: { tr: 'Var ama yapılandırıldı', en: 'Yes, but it has been restructured' }, flags: ['restructured'] },
      { id: 'yes', label: { tr: 'Evet', en: 'Yes' }, flags: ['debt'] },
      { id: 'unsure', label: { tr: 'Bilmiyorum', en: 'I don’t know' }, flags: ['debt_unsure'] },
    ],
  },
];

/** Programme families suggested by flags. Order matters: first match first. */
export const programmes: { when: string[]; unless?: string[]; text: T; why: T }[] = [
  {
    when: ['idea'],
    text: { tr: 'TÜBİTAK BiGG ve KOSGEB girişimcilik destekleri', en: 'TÜBİTAK BiGG and KOSGEB entrepreneurship support' },
    why: { tr: 'Henüz kurulmamış ya da yeni kurulan girişimler için tasarlandılar.', en: 'Designed for start-ups that are not yet founded or newly founded.' },
  },
  {
    when: ['goal_rd', 'young'],
    unless: ['no_rd'],
    text: { tr: 'TÜBİTAK 1507 KOBİ Ar-Ge Başlangıç', en: 'TÜBİTAK 1507 SME R&D Start-up' },
    why: { tr: 'İlk Ar-Ge projesini yapacak küçük ölçekli şirketler için.', en: 'For small companies running their first R&D project.' },
  },
  {
    when: ['goal_rd', 'established'],
    unless: ['no_rd'],
    text: { tr: 'TÜBİTAK 1501, 1507 veya 1707', en: 'TÜBİTAK 1501, 1507 or 1707' },
    why: { tr: 'Ölçeğinize ve geçmiş Ar-Ge deneyiminize göre biri öne çıkar.', en: 'One or the other fits better depending on your size and R&D track record.' },
  },
  {
    when: ['goal_rd'],
    unless: ['no_rd', 'idea'],
    text: { tr: 'Teknopark ve TEKMER', en: 'Technoparks and TEKMER technology development centres' },
    why: { tr: 'TÜBİTAK’a alternatif ya da tamamlayıcı olarak değerlendirilebilir.', en: 'Can be an alternative or a complement to TÜBİTAK.' },
  },
  {
    when: ['goal_commercial'],
    unless: ['idea'],
    text: { tr: 'KOSGEB İş Geliştirme Destek Programı ve TÜR Belgesi', en: 'KOSGEB Business Development Support and the Technology Product Certificate' },
    why: { tr: 'Var olan ürünün büyütülmesi ve yerli teknoloji ürünü avantajları için.', en: 'For growing an existing product and gaining domestic-technology advantages.' },
  },
  {
    when: ['goal_export'],
    text: { tr: 'Ticaret Bakanlığı İhracat Destekleri', en: 'Ministry of Trade export support' },
    why: { tr: 'Yurt dışı tanıtım ve pazara giriş harcamaları için.', en: 'For overseas promotion and market entry costs.' },
  },
  {
    when: ['goal_eexport'],
    text: { tr: 'Ticaret Bakanlığı E-İhracat Destekleri', en: 'Ministry of Trade e-export support' },
    why: { tr: 'Pazaryerlerinde tanıtım ve komisyon desteği için.', en: 'For promotion and commission costs on online marketplaces.' },
  },
  {
    when: ['goal_digital'],
    text: { tr: 'Sanayi ve Teknoloji Bakanlığı Dijital Dönüşüm Programı, KOSGEB Dijital Dönüşüm Destek Programı, KOSGEB Kapasite Geliştirme Programı', en: 'Ministry of Industry and Technology Digital Transformation Programme, KOSGEB Digital Transformation Support and KOSGEB Capacity Building programmes' },
    why: { tr: 'Üretimde yazılım, donanım ve dijital çözümlere geçiş için.', en: 'For moving production onto software, hardware and digital solutions.' },
  },
  {
    when: ['goal_invest'],
    text: { tr: 'Yatırım Teşvik Belgesi', en: 'Investment Incentive Certificate' },
    why: { tr: 'Makine ve tesis yatırımlarında vergi ve finansman avantajları için.', en: 'For tax and financing advantages on machinery and facility investments.' },
  },
  {
    when: ['goal_invest'],
    text: { tr: 'Yatırım Kredileri, Yatırım Taahhütlü Avans Kredisi ve faiz destekleri', en: 'Investment loans, the Investment Commitment Advance Loan and interest subsidies' },
    why: { tr: 'Teşvik belgesiyle birlikte finansman maliyetini düşürmek için.', en: 'To lower financing costs alongside the incentive certificate.' },
  },
  {
    when: ['goal_credit'],
    text: { tr: 'KOSGEB faiz destekli krediler, Türk Eximbank kredileri ve kamu destekli kefalet', en: 'KOSGEB interest-subsidised loans, Türk Eximbank loans and state-backed guarantees' },
    why: { tr: 'Faiz yükü kamu desteğiyle düşürülmüş finansmana erişim için.', en: 'For financing where public support lowers the interest burden.' },
  },
  {
    when: ['goal_credit', 'idea'],
    text: { tr: 'Girişimcilere yönelik destek ve kredi programları', en: 'Support and loan programmes for entrepreneurs' },
    why: { tr: 'Henüz kurulmamış ya da yeni kurulan şirketler için ayrı koşullar vardır.', en: 'Separate conditions apply to companies not yet founded or newly founded.' },
  },
];

/** Risk notes shown when a flag is present. */
export const risks: Record<string, T> = {
  no_rd: {
    tr: 'Ar-Ge desteği istiyorsunuz ama projede çözülmemiş teknik problem yok. Bu durumda Ar-Ge programları büyük olasılıkla reddeder; ticarileştirme ya da yatırım programlarına bakın.',
    en: 'You want R&D funding but the project has no unsolved technical problem. R&D programmes will very likely reject it; look at commercialisation or investment programmes instead.',
  },
  vague_rd: {
    tr: 'Teknik belirsizliği tarif etmekte zorlanmanız, hakem değerlendirmesinde en çok puan kaybedilen noktadır.',
    en: 'Struggling to describe the technical uncertainty is where proposals lose the most points in review.',
  },
  troubled: {
    tr: 'Geçmişte yaşanan rapor ya da ödeme sorunu, aynı hataların tekrarlanma riskine işaret eder. Önce nedenini netleştirin.',
    en: 'Past problems with reports or payments suggest the same mistakes may happen again. Work out the cause first.',
  },
  accountant: {
    tr: 'Finans profesyonelleri muhasebeyi iyi bilir ama proje metni ve teknik rapor ayrı bir uzmanlıktır.',
    en: 'Finance professionals know the books well, but project narratives and technical reports are a different skill.',
  },
  low_time: {
    tr: 'Ayda 8 saatin altında bir zamanla başvuru ve özellikle raporlama dönemleri aksar.',
    en: 'With less than 8 hours a month, the application and especially the reporting periods will slip.',
  },
  messy: {
    tr: 'Nakit ödemeler ve eksik belgeler, onaylanmış desteğin ödenmemesinin en yaygın nedenidir.',
    en: 'Cash payments and missing records are the most common reason approved funding is not paid.',
  },
  debt: {
    tr: 'Vadesi geçmiş borç çoğu programda başvuru ya da ödeme engelidir. Önce borcu yapılandırın.',
    en: 'Overdue debt blocks the application or payment in most programmes. Restructure it first.',
  },
  debt_unsure: {
    tr: 'Borç durumunuzu e-Devlet, GİB ve SGK üzerinden kontrol edin; başvurudan önce netleşmeli.',
    en: 'Check your debt status through e-Devlet, the tax office and SGK; it must be clear before you apply.',
  },
  restructured: {
    tr: 'Yapılandırılmış borçta taksitlerin aksamaması gerekir; aksayan taksit ödemeyi durdurabilir.',
    en: 'With restructured debt, instalments must stay on schedule; a missed instalment can stop payments.',
  },
};

export const blockers = ['debt'];
export const maxPoints = 10;

export const verdicts = {
  ready: {
    title: { tr: 'Başvuru ve devam süreçlerini yürütmek için yeterliliğe sahipsiniz.', en: 'You have what it takes to run the application and the follow-up.' },
    body: {
      tr: 'Yanıtlarınıza göre başvuruyu ve takibi kendi ekibinizle yürütebilecek durumdasınız. Danışman desteği şart değil. Aşağıdaki risk notlarına göz atın ve resmi kaynaklardan güncel çağrıyı okuyarak başlayın.',
      en: 'Based on your answers, your own team can run the application and follow-up. Consultant support isn’t essential. Read the risk notes below and start with the current call on the official sites.',
    },
  },
  partial: {
    title: { tr: 'Kendiniz yapabilirsiniz, ama bazı adımlar riskli ve kayıplar yaşanabilir.', en: 'You can do it, but some steps are risky and you may lose out.' },
    body: {
      tr: 'Temel hazırlığınız var, ama aşağıdaki noktalar başvurunun reddedilmesine ya da onaylanan desteğin kesilmesine yol açabilir. Bu adımlarda tek seferlik bir kontrol ya da kısmi destek almak, tamamını dışarıya vermekten daha mantıklı olabilir.',
      en: 'You have the basics, but the points below can lead to rejection or to approved funding being cut. A one-off review or partial help on these steps may make more sense than outsourcing everything.',
    },
  },
  hard: {
    title: { tr: 'Tek başına yürütmek şu an yüksek risk taşıyor.', en: 'Going it alone carries a high risk right now.' },
    body: {
      tr: 'Yanıtlarınıza göre zaman, deneyim ya da belge düzeni tarafında birden fazla açık var. Bu açıklarla başvuru yapılabilir, ama sorunlar genellikle onaydan sonra, uygulama ve raporlama sırasında çıkar.',
      en: 'Your answers show gaps in more than one area: time, experience or record keeping. You can still apply, but problems usually surface after approval, during implementation and reporting.',
    },
  },
  blocked: {
    title: { tr: 'Önce engeli kaldırın.', en: 'Remove the blocker first.' },
    body: {
      tr: 'Vadesi geçmiş vergi ya da SGK borcu çoğu programda başvuruyu ya da ödemeyi durdurur. Bu durum çözülmeden yapılacak başvuru zaman kaybı olabilir.',
      en: 'Overdue tax or social security debt stops the application or payment in most programmes. Applying before this is resolved is likely to be wasted effort.',
    },
  },
};

export const officialLinks = [
  { name: 'TÜBİTAK', url: 'https://www.tubitak.gov.tr' },
  { name: 'KOSGEB', url: 'https://www.kosgeb.gov.tr' },
  { name: { tr: 'Sanayi ve Teknoloji Bakanlığı', en: 'Ministry of Industry and Technology' }, url: 'https://www.sanayi.gov.tr' },
  { name: { tr: 'Ticaret Bakanlığı', en: 'Ministry of Trade' }, url: 'https://www.ticaret.gov.tr' },
];

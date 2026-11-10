export const locales = ["uz", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  en: "English",
  ru: "Русский",
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; services: string; contact: string; book: string };
  hero: {
    badge: string;
    titleStart: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    credentialsTitle: string;
    credentials: string[];
    highlights: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  videos: { eyebrow: string; title: string; subtitle: string };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    consultTitle: string;
    consultText: string;
    whatsapp: string;
    telegram: string;
    call: string;
    clinicTitle: string;
    clinicName: string;
    addressLabel: string;
    address: string;
    landmark: string;
    phonesLabel: string;
    hoursLabel: string;
    hours: string;
    hoursNote: string;
    mapCta: string;
  };
  footer: { rights: string; channel: string; tagline: string };
  floating: string;
};

const uz: Dictionary = {
  meta: {
    title: "Dr. Bakhtiyor Najmiddinov — Plastik jarroh | Toshkent",
    description:
      "Dr. Bakhtiyor Najmiddinov (MD, PhD) — plastik va rekonstruktiv jarroh. Rinoplastika, blefaroplastika, feyslift, mammoplastika, liposaksiya va boshqa yo'nalishlar. Toshkent.",
  },
  nav: {
    about: "Shifokor",
    services: "Xizmatlar",
    contact: "Aloqa",
    book: "Konsultatsiya",
  },
  hero: {
    badge: "Tibbiyot fanlari doktori · MD, PhD",
    titleStart: "Orzu qilgan go'zallik va",
    titleAccent: "mukammallik",
    subtitle:
      "Xalqaro tajribaga ega jarroh qo'lida — Janubiy Koreya (Seul Milliy Universiteti) ta'limi va xalqaro andozalar asosida yuz va tana estetikasini mukammal ko'rinishga keltirish.",
    ctaPrimary: "Konsultatsiyaga yozilish",
    ctaSecondary: "Xizmatlarni ko'rish",
    stats: [
      { value: "MD, PhD", label: "Tibbiyot fanlari doktori" },
      { value: "Seul", label: "Milliy Universiteti ta'limi" },
      { value: "7+", label: "Jarrohlik yo'nalishi" },
    ],
  },
  about: {
    eyebrow: "Biografiya va ta'lim",
    title: "Dr. Bakhtiyor Farxodovich Najmiddinov",
    lead: "O'zbekistondagi yetakchi va zamonaviy plastik hamda rekonstruktiv jarrohlardan biri.",
    body: "Jahon miqyosida plastik jarrohlik poytaxti hisoblangan Janubiy Koreyada yuqori bosqichli tibbiy ta'limni olgan va u yerdagi ilg'or texnologiyalarni yurtimiz tibbiyotiga tatbiq etib kelmoqda.",
    credentialsTitle: "Ma'lumoti va ilmiy faoliyati",
    credentials: [
      "Seul Milliy Universiteti (Seoul National University, Janubiy Koreya) — magistratura va doktorantura (PhD) dasturlari egasi",
      "Xalqaro ilmiy jurnallarda plastik va rekonstruktiv jarrohlik bo'yicha ko'plab ilmiy maqolalar muallifi",
      "ResearchGate a'zosi",
      "Zamonaviy estetik jarrohlikning eng so'nggi xavfsiz metodikalarini qo'llovchi mutaxassis",
    ],
    highlights: ["Tibbiyot fanlari doktori", "Plastik va rekonstruktiv jarroh", "Janubiy Koreya ta'limi"],
  },
  videos: {
    eyebrow: "Video",
    title: "Klinika va jarrohlik jarayonlari",
    subtitle: "Shifokor bilan tanishing, jarayonlar haqida qisqa videolarni ko'ring.",
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Yo'nalishlar",
    subtitle: "Har bir bemor uchun individual rejalashtirilgan, xavfsiz va zamonaviy metodikalar.",
    items: [
      { title: "Rinoplastika", desc: "Burun shaklini to'g'rilash va nafas olishni yaxshilash" },
      { title: "Blefaroplastika", desc: "Qovoqlar plastikasi, ifodali va uyg'un \"osiyocha\" ko'z estetikasi" },
      { title: "Feyslift (Facelift)", desc: "Yuz terisini tortish va yoshartirish operatsiyalari" },
      { title: "Ginekomastiya", desc: "Erkaklarda ko'krak bezlari hajmini tiklash" },
      { title: "Mammoplastika", desc: "Ko'krakni shakllantirish, mammopeksiya va endoprotezlash" },
      { title: "Liposaksiya va lipofilling", desc: "Tana qomatini modellashtirish" },
      { title: "Abdominoplastika", desc: "Qorin sohasidagi ortiqcha teri va yog' qatlamini yo'qotish" },
    ],
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Konsultatsiyaga yoziling",
    subtitle: "Savollaringizni yozing yoki qo'ng'iroq qiling — shifokor bilan uchrashuvni birgalikda belgilaymiz.",
    consultTitle: "Shaxsiy konsultatsiya",
    consultText: "WhatsApp yoki Telegram orqali yozing — tez javob beramiz.",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    call: "Qo'ng'iroq",
    clinicTitle: "Klinika",
    clinicName: "Expert Medical Clinic (Pro Surgery)",
    addressLabel: "Manzil",
    address: "Toshkent sh., Yunusobod tumani, Kichik halqa yo'li, 11A",
    landmark: "Mo'ljal: EVOS Sofiyskiy",
    phonesLabel: "Telefon",
    hoursLabel: "Ish vaqti",
    hours: "Dushanba — Shanba",
    hoursNote: "Konsultatsiya uchun oldindan yozilish majburiy",
    mapCta: "Xaritada ochish",
  },
  footer: {
    rights: "Barcha huquqlar himoyalangan.",
    channel: "Telegram kanal",
    tagline: "Plastik va rekonstruktiv jarroh",
  },
  floating: "Yozish",
};

const en: Dictionary = {
  meta: {
    title: "Dr. Bakhtiyor Najmiddinov — Plastic Surgeon | Tashkent",
    description:
      "Dr. Bakhtiyor Najmiddinov (MD, PhD) — plastic and reconstructive surgeon. Rhinoplasty, blepharoplasty, facelift, breast surgery, liposuction and more. Tashkent.",
  },
  nav: {
    about: "Doctor",
    services: "Services",
    contact: "Contact",
    book: "Consultation",
  },
  hero: {
    badge: "Doctor of Medical Sciences · MD, PhD",
    titleStart: "The beauty and",
    titleAccent: "perfection",
    subtitle:
      "You dream of — in the hands of a surgeon with international experience. Aesthetic results for face and body, based on training at Seoul National University and international standards.",
    ctaPrimary: "Book a consultation",
    ctaSecondary: "View services",
    stats: [
      { value: "MD, PhD", label: "Doctor of Medical Sciences" },
      { value: "Seoul", label: "Seoul National University training" },
      { value: "7+", label: "Surgical specialties" },
    ],
  },
  about: {
    eyebrow: "Biography & education",
    title: "Dr. Bakhtiyor Farxodovich Najmiddinov",
    lead: "One of Uzbekistan's leading modern plastic and reconstructive surgeons.",
    body: "He completed advanced medical training in South Korea — a world capital of plastic surgery — and is bringing the latest technologies he learned there into medicine in Uzbekistan.",
    credentialsTitle: "Education & scientific work",
    credentials: [
      "Seoul National University (South Korea) — holder of Master's and Doctoral (PhD) degrees",
      "Author of numerous scientific articles on plastic and reconstructive surgery in international journals",
      "Member of ResearchGate",
      "Specialist applying the latest safe methods of modern aesthetic surgery",
    ],
    highlights: ["Doctor of Medical Sciences", "Plastic & reconstructive surgeon", "Training in South Korea"],
  },
  videos: {
    eyebrow: "Video",
    title: "Clinic & surgery in motion",
    subtitle: "Get to know the doctor and watch short videos about the procedures.",
  },
  services: {
    eyebrow: "Services",
    title: "Specialties",
    subtitle: "Safe, modern techniques, planned individually for every patient.",
    items: [
      { title: "Rhinoplasty", desc: "Nose shape correction and improved breathing" },
      { title: "Blepharoplasty", desc: "Eyelid surgery — expressive, harmonious eye aesthetics" },
      { title: "Facelift", desc: "Facial skin lifting and rejuvenation procedures" },
      { title: "Gynecomastia", desc: "Restoring chest contour and breast size in men" },
      { title: "Mammoplasty", desc: "Breast shaping, mastopexy and implant surgery" },
      { title: "Liposuction & lipofilling", desc: "Body contouring and shaping" },
      { title: "Abdominoplasty", desc: "Removal of excess abdominal skin and fat" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Book a consultation",
    subtitle: "Send your questions or call us — we will arrange your visit with the doctor together.",
    consultTitle: "Personal consultation",
    consultText: "Write via WhatsApp or Telegram — we reply quickly.",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    call: "Call",
    clinicTitle: "Clinic",
    clinicName: "Expert Medical Clinic (Pro Surgery)",
    addressLabel: "Address",
    address: "Tashkent, Yunusabad district, Kichik halqa yo'li 11A",
    landmark: "Landmark: EVOS Sofiyskiy",
    phonesLabel: "Phone",
    hoursLabel: "Working hours",
    hours: "Monday — Saturday",
    hoursNote: "Appointment required for consultations",
    mapCta: "Open in maps",
  },
  footer: {
    rights: "All rights reserved.",
    channel: "Telegram channel",
    tagline: "Plastic & reconstructive surgeon",
  },
  floating: "Message",
};

const ru: Dictionary = {
  meta: {
    title: "Dr. Bakhtiyor Najmiddinov — Пластический хирург | Ташкент",
    description:
      "Dr. Bakhtiyor Najmiddinov (MD, PhD) — пластический и реконструктивный хирург. Ринопластика, блефаропластика, подтяжка лица, маммопластика, липосакция и др. Ташкент.",
  },
  nav: {
    about: "Врач",
    services: "Услуги",
    contact: "Контакты",
    book: "Консультация",
  },
  hero: {
    badge: "Доктор медицинских наук · MD, PhD",
    titleStart: "Красота и",
    titleAccent: "совершенство",
    subtitle:
      "О которых вы мечтаете — в руках хирурга с международным опытом. Эстетика лица и тела на основе обучения в Сеульском национальном университете и международных стандартов.",
    ctaPrimary: "Записаться на консультацию",
    ctaSecondary: "Смотреть услуги",
    stats: [
      { value: "MD, PhD", label: "Доктор медицинских наук" },
      { value: "Сеул", label: "Обучение в Сеульском университете" },
      { value: "7+", label: "Хирургических направлений" },
    ],
  },
  about: {
    eyebrow: "Биография и образование",
    title: "Dr. Бахтиёр Фарходович Наймиддинов",
    lead: "Один из ведущих современных пластических и реконструктивных хирургов Узбекистана.",
    body: "Прошёл высокоуровневое медицинское обучение в Южной Корее — мировой столице пластической хирургии — и применяет передовые технологии, освоенные там, в медицине Узбекистана.",
    credentialsTitle: "Образование и научная деятельность",
    credentials: [
      "Сеульский национальный университет (Южная Корея) — магистратура и докторантура (PhD)",
      "Автор множества научных статей по пластической и реконструктивной хирургии в международных журналах",
      "Член ResearchGate",
      "Специалист, применяющий новейшие безопасные методики современной эстетической хирургии",
    ],
    highlights: ["Доктор медицинских наук", "Пластический и реконструктивный хирург", "Обучение в Южной Корее"],
  },
  videos: {
    eyebrow: "Видео",
    title: "Клиника и процедуры в деталях",
    subtitle: "Познакомьтесь с врачом и посмотрите короткие видео о процедурах.",
  },
  services: {
    eyebrow: "Услуги",
    title: "Направления",
    subtitle: "Безопасные современные методики, индивидуально спланированные для каждого пациента.",
    items: [
      { title: "Ринопластика", desc: "Коррекция формы носа и улучшение дыхания" },
      { title: "Блефаропластика", desc: "Пластика век — выразительная и гармоничная форма глаз" },
      { title: "Фейслифтинг", desc: "Подтяжка кожи лица и омоложение" },
      { title: "Гинекомастия", desc: "Восстановление контура груди и объёма молочных желёз у мужчин" },
      { title: "Маммопластика", desc: "Формирование груди, маммопексия и эндопротезирование" },
      { title: "Липосакция и липофиллинг", desc: "Моделирование фигуры" },
      { title: "Абдоминопластика", desc: "Удаление избытка кожи и жировой ткани в области живота" },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Запишитесь на консультацию",
    subtitle: "Напишите нам или позвоните — вместе подберём удобное время визита к врачу.",
    consultTitle: "Личная консультация",
    consultText: "Напишите в WhatsApp или Telegram — ответим быстро.",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    call: "Позвонить",
    clinicTitle: "Клиника",
    clinicName: "Expert Medical Clinic (Pro Surgery)",
    addressLabel: "Адрес",
    address: "Ташкент, Юнусабадский район, ул. Kichik halqa yo'li, 11A",
    landmark: "Ориентир: EVOS Sofiyskiy",
    phonesLabel: "Телефон",
    hoursLabel: "Часы работы",
    hours: "Понедельник — Суббота",
    hoursNote: "Для консультаций необходима предварительная запись",
    mapCta: "Открыть на карте",
  },
  footer: {
    rights: "Все права защищены.",
    channel: "Telegram-канал",
    tagline: "Пластический и реконструктивный хирург",
  },
  floating: "Написать",
};

export const dictionaries: Record<Locale, Dictionary> = { uz, en, ru };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

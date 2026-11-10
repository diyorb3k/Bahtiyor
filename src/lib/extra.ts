import type { Locale } from "@/lib/dictionaries";

export type Extra = {
  process: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    namePh: string;
    phone: string;
    service: string;
    serviceAny: string;
    channel: string;
    channelWa: string;
    channelTg: string;
    channelCall: string;
    message: string;
    messagePh: string;
    consent: string;
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
    errorText: string;
    required: string;
    phoneInvalid: string;
    fallbackNote: string;
    another: string;
  };
  mobileCta: string;
};

export const extra: Record<Locale, Extra> = {
  uz: {
    process: {
      eyebrow: "Jarayon",
      title: "Qanday ishlaymiz",
      steps: [
        { title: "Konsultatsiya", desc: "Maqsadingizni tinglaymiz va sizga mos yo'nalishni tanlaymiz." },
        { title: "Tekshiruv", desc: "Shifokor individual rejani tuzadi, barcha savollarga javob beradi." },
        { title: "Operatsiya", desc: "Zamonaviy va xavfsiz metodikalar asosida amalga oshiriladi." },
        { title: "Kuzatuv", desc: "Tiklanish davri va natijani nazorat qilish — doimiy yordam bilan." },
      ],
    },
    form: {
      eyebrow: "Yozilish",
      title: "Konsultatsiyaga yoziling",
      subtitle: "Ma'lumotlaringizni qoldiring — administratorimiz tez orada siz bilan bog'lanadi.",
      name: "Ismingiz",
      namePh: "Masalan, Aziz",
      phone: "Telefon raqamingiz",
      service: "Yo'nalish",
      serviceAny: "Tanlang (ixtiyoriy)",
      channel: "Qaysi usulda bog'lanamiz?",
      channelWa: "WhatsApp",
      channelTg: "Telegram",
      channelCall: "Qo'ng'iroq",
      message: "Qisqacha izoh (ixtiyoriy)",
      messagePh: "Savolingiz yoki holatingiz haqida yozing",
      consent: "Ma'lumotlarimni konsultatsiya uchun qayta ishlashga roziman.",
      submit: "So'rov yuborish",
      sending: "Yuborilmoqda…",
      successTitle: "Rahmat! So'rovingiz qabul qilindi",
      successText: "Tez orada siz bilan bog'lanamiz.",
      errorText: "Yuborishda xatolik yuz berdi. Iltimos, WhatsApp orqali yozing.",
      required: "Ism va telefon majburiy",
      phoneInvalid: "Telefon raqamini to'g'ri kiriting",
      fallbackNote: "Yoki to'g'ridan-to'g'ri WhatsApp orqali yozing:",
      another: "Yana so'rov yuborish",
    },
    mobileCta: "Yozilish",
  },
  en: {
    process: {
      eyebrow: "Process",
      title: "How we work",
      steps: [
        { title: "Consultation", desc: "We listen to your goals and choose the right direction for you." },
        { title: "Assessment", desc: "The surgeon builds an individual plan and answers all your questions." },
        { title: "Surgery", desc: "Performed with modern, safe techniques." },
        { title: "Follow-up", desc: "Recovery and results monitored with continuous support." },
      ],
    },
    form: {
      eyebrow: "Booking",
      title: "Book a consultation",
      subtitle: "Leave your details — our coordinator will contact you shortly.",
      name: "Your name",
      namePh: "e.g. Aziz",
      phone: "Your phone number",
      service: "Specialty",
      serviceAny: "Select (optional)",
      channel: "How should we reach you?",
      channelWa: "WhatsApp",
      channelTg: "Telegram",
      channelCall: "Phone call",
      message: "Short note (optional)",
      messagePh: "Tell us about your question or situation",
      consent: "I agree to my data being processed for the consultation.",
      submit: "Send request",
      sending: "Sending…",
      successTitle: "Thank you! Your request is received",
      successText: "We will contact you shortly.",
      errorText: "Something went wrong. Please write to us on WhatsApp.",
      required: "Name and phone are required",
      phoneInvalid: "Please enter a valid phone number",
      fallbackNote: "Or write to us directly on WhatsApp:",
      another: "Send another request",
    },
    mobileCta: "Book now",
  },
  ru: {
    process: {
      eyebrow: "Процесс",
      title: "Как мы работаем",
      steps: [
        { title: "Консультация", desc: "Выслушаем ваши цели и подберём подходящее направление." },
        { title: "Обследование", desc: "Хирург составит индивидуальный план и ответит на все вопросы." },
        { title: "Операция", desc: "Выполняется современными и безопасными методиками." },
        { title: "Наблюдение", desc: "Контроль восстановления и результата с постоянной поддержкой." },
      ],
    },
    form: {
      eyebrow: "Запись",
      title: "Запишитесь на консультацию",
      subtitle: "Оставьте контакты — наш администратор свяжется с вами в ближайшее время.",
      name: "Ваше имя",
      namePh: "Например, Азиз",
      phone: "Ваш телефон",
      service: "Направление",
      serviceAny: "Выберите (необязательно)",
      channel: "Как с вами связаться?",
      channelWa: "WhatsApp",
      channelTg: "Telegram",
      channelCall: "Звонок",
      message: "Короткий комментарий (необязательно)",
      messagePh: "Расскажите о вашем вопросе или ситуации",
      consent: "Я согласен на обработку персональных данных для консультации.",
      submit: "Отправить заявку",
      sending: "Отправка…",
      successTitle: "Спасибо! Заявка принята",
      successText: "Мы свяжемся с вами в ближайшее время.",
      errorText: "Произошла ошибка. Пожалуйста, напишите нам в WhatsApp.",
      required: "Имя и телефон обязательны",
      phoneInvalid: "Введите корректный номер телефона",
      fallbackNote: "Или напишите нам напрямую в WhatsApp:",
      another: "Отправить ещё заявку",
    },
    mobileCta: "Записаться",
  },
};

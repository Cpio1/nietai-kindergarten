export type Locale = "kk" | "ru";
export type SectionId = "home" | "about" | "groups" | "food" | "gallery" | "documents" | "contact";

export const localePath: Record<Locale, string> = { kk: "/", ru: "/ru" };

type Dictionary = {
  meta: { title: string; description: string };
  a11y: {
    menuOpen: string;
    menuClose: string;
    toLight: string;
    toDark: string;
    switchLang: string;
    mainNav: string;
    home: string;
  };
  brand: { name: string; short: string };
  nav: Record<SectionId, string>;
  hero: { title: string; subtitle: string; cta: string; call: string; imageAlt: string };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    mediaAlt: string;
  };
  groups: { eyebrow: string; title: string; text: string; count: string; countLabel: string; call: string };
  food: {
    eyebrow: string;
    title: string;
    text: string;
    meals: { id: "breakfast" | "lunch" | "snack" | "dinner"; name: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    photoAlt: (n: number) => string;
    open: (n: number) => string;
    more: string;
    close: string;
    prev: string;
    next: string;
    counter: (current: number, total: number) => string;
  };
  documents: {
    eyebrow: string;
    title: string;
    textReady: string;
    textPending: string;
    button: string;
    opensNewTab: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    call: string;
    openMap: string;
    mapTitle: string;
  };
  footer: { rights: string };
  notFound: { title: string; back: string };
};

export const dictionary: Record<Locale, Dictionary> = {
  kk: {
    meta: {
      title: "Ниетай бөбекжай-бақшасы — Байсерке ауылы, Іле ауданы",
      description:
        "Ниетай бөбекжай-бақшасы: 2–6 жас аралығындағы балаларға арналған 7 топ, қазақ тілінде тәрбие және 4 мезгіл тамақтану. Алматы облысы, Іле ауданы, Байсерке ауылы.",
    },
    a11y: {
      menuOpen: "Мәзірді ашу",
      menuClose: "Мәзірді жабу",
      toLight: "Жарық тақырыпқа ауысу",
      toDark: "Қараңғы тақырыпқа ауысу",
      switchLang: "Орыс тіліне ауысу",
      mainNav: "Негізгі мәзір",
      home: "Басты бетке өту",
    },
    brand: { name: "Ниетай бөбекжай-бақшасы", short: "Ниетай" },
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      groups: "Топтар",
      food: "Тамақтану",
      gallery: "Галерея",
      documents: "Құжаттар",
      contact: "Байланыс",
    },
    hero: {
      title: "Ниетай бөбекжай-бақшасына қош келдіңіз!",
      subtitle: "Балаңыздың бақытты балалық шағы мен жарқын болашағына бірге қадам басайық!",
      cta: "Біз туралы",
      call: "Қоңырау шалу",
      imageAlt: "Ниетай бөбекжай-бақшасы",
    },
    about: {
      eyebrow: "Біз туралы",
      title: "Балаларға арналған мейірімді орта",
      paragraphs: [
        "Ниетай бөбекжай-бақшасы Алматы облысының Іле ауданы, Байсерке ауылында орналасқан. Бізде 2 мен 6 жас аралығындағы балаларға арналған 7 топ бар.",
        "Тәрбие жұмысы қазақ тілінде жүргізіледі, ал күн тәртібіне 4 мезгіл тамақтану кіреді. Балаңыздың бақытты балалық шағына бірге қамқор болайық!",
      ],
      stats: [
        { value: "7", label: "топ" },
        { value: "2–6", label: "жас" },
        { value: "Қазақ тілінде", label: "тәрбие" },
        { value: "4", label: "мезгіл тамақтану" },
      ],
      mediaAlt: "Ниетай бөбекжай-бақшасы",
    },
    groups: {
      eyebrow: "Топтар",
      title: "Жеті топ — жеті түрлі қуаныш",
      text: "Бөбекжай-бақшамызда 2 мен 6 жас аралығындағы балаларға арналған 7 топ бар. Топтар туралы толық ақпаратты телефон арқылы сұрай аласыз.",
      count: "7",
      countLabel: "топ",
      call: "Қоңырау шалу",
    },
    food: {
      eyebrow: "Тамақтану",
      title: "Күніне 4 мезгіл тамақтану",
      text: "Балалардың күн тәртібінде төрт мезгіл ас бар.",
      meals: [
        { id: "breakfast", name: "Таңғы ас" },
        { id: "lunch", name: "Түскі ас" },
        { id: "snack", name: "Бесін ас" },
        { id: "dinner", name: "Кешкі ас" },
      ],
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Балабақшадағы сәттер",
      photoAlt: (n) => `Ниетай бөбекжай-бақшасы, ${n}-сурет`,
      open: (n) => `${n}-суретті үлкейтіп қарау`,
      more: "Тағы көрсету",
      close: "Жабу",
      prev: "Алдыңғы сурет",
      next: "Келесі сурет",
      counter: (current, total) => `${current} / ${total}`,
    },
    documents: {
      eyebrow: "Құжаттар",
      title: "Балабақша құжаттары",
      textReady: "Балабақшаның құжаттарын Google Drive арқылы қарай аласыз.",
      textPending: "Құжаттарға сілтеме дайындалуда. Сұрақтарыңыз болса, бізге қоңырау шалыңыз.",
      button: "Құжаттарды қарау",
      opensNewTab: "жаңа бетте ашылады",
    },
    contact: {
      eyebrow: "Байланыс",
      title: "Бізге хабарласыңыз",
      addressLabel: "Мекенжай",
      address: "Алматы облысы, Іле ауданы, Байсерке ауылы, Нұрлы жол көшесі, 5А",
      phoneLabel: "Телефон",
      call: "Қоңырау шалу",
      openMap: "2ГИС-те ашу",
      mapTitle: "Ниетай бөбекжай-бақшасы 2ГИС картасында",
    },
    footer: { rights: "Барлық құқықтар қорғалған." },
    notFound: { title: "Мұндай бет табылмады", back: "Басты бетке оралу" },
  },
  ru: {
    meta: {
      title: "Детский сад «Ниетай» — село Байсерке, Илийский район",
      description:
        "Детский сад «Ниетай»: 7 групп для детей от 2 до 6 лет, воспитание на казахском языке и 4-разовое питание. Алматинская область, Илийский район, село Байсерке.",
    },
    a11y: {
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      toLight: "Включить светлую тему",
      toDark: "Включить тёмную тему",
      switchLang: "Переключить на казахский язык",
      mainNav: "Основное меню",
      home: "На главную",
    },
    brand: { name: "Детский сад «Ниетай»", short: "Ниетай" },
    nav: {
      home: "Главная",
      about: "О садике",
      groups: "Группы",
      food: "Питание",
      gallery: "Галерея",
      documents: "Документы",
      contact: "Контакты",
    },
    hero: {
      title: "Добро пожаловать в детский сад «Ниетай»!",
      subtitle: "Вместе шагнём к счастливому детству и светлому будущему вашего ребёнка!",
      cta: "О садике",
      call: "Позвонить",
      imageAlt: "Детский сад «Ниетай»",
    },
    about: {
      eyebrow: "О садике",
      title: "Добрая среда для детей",
      paragraphs: [
        "Детский сад «Ниетай» находится в селе Байсерке Илийского района Алматинской области. У нас 7 групп для детей от 2 до 6 лет.",
        "Воспитание ведётся на казахском языке, а в распорядок дня входит 4-разовое питание. Давайте вместе заботиться о счастливом детстве вашего ребёнка!",
      ],
      stats: [
        { value: "7", label: "групп" },
        { value: "2–6", label: "лет" },
        { value: "На казахском", label: "воспитание" },
        { value: "4", label: "приёма пищи" },
      ],
      mediaAlt: "Детский сад «Ниетай»",
    },
    groups: {
      eyebrow: "Группы",
      title: "Семь групп — семь поводов для радости",
      text: "В нашем детском саду 7 групп для детей от 2 до 6 лет. Подробную информацию о группах можно узнать по телефону.",
      count: "7",
      countLabel: "групп",
      call: "Позвонить",
    },
    food: {
      eyebrow: "Питание",
      title: "4 приёма пищи в день",
      text: "В распорядке дня детей четыре приёма пищи.",
      meals: [
        { id: "breakfast", name: "Завтрак" },
        { id: "lunch", name: "Обед" },
        { id: "snack", name: "Полдник" },
        { id: "dinner", name: "Ужин" },
      ],
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Моменты из жизни сада",
      photoAlt: (n) => `Детский сад «Ниетай», фото ${n}`,
      open: (n) => `Открыть фото ${n} в увеличенном виде`,
      more: "Показать ещё",
      close: "Закрыть",
      prev: "Предыдущее фото",
      next: "Следующее фото",
      counter: (current, total) => `${current} / ${total}`,
    },
    documents: {
      eyebrow: "Документы",
      title: "Документы детского сада",
      textReady: "Документы детского сада можно посмотреть на Google Drive.",
      textPending: "Ссылка на документы готовится. Если у вас есть вопросы, позвоните нам.",
      button: "Посмотреть документы",
      opensNewTab: "откроется в новой вкладке",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      addressLabel: "Адрес",
      address: "Алматинская область, Илийский район, село Байсерке, улица Нурлы Жол, 5А",
      phoneLabel: "Телефон",
      call: "Позвонить",
      openMap: "Открыть в 2ГИС",
      mapTitle: "Детский сад «Ниетай» на карте 2ГИС",
    },
    footer: { rights: "Все права защищены." },
    notFound: { title: "Такой страницы нет", back: "Вернуться на главную" },
  },
};

export const sectionOrder: SectionId[] = ["home", "about", "groups", "food", "gallery", "documents", "contact"];

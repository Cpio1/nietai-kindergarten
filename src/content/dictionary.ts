export type Locale = "kk" | "ru";
export type SectionId = "home" | "about" | "groups" | "clubs" | "food" | "gallery" | "documents" | "contact";

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
  brand: { name: string; short: string; logoAlt: string };
  nav: Record<SectionId, string>;
  hero: { title: string; subtitle: string; cta: string; call: string; imageAlt: string };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    mediaAlt: string;
  };
  groups: { eyebrow: string; title: string; text: string; call: string };
  clubs: {
    eyebrow: string;
    title: string;
    text: string;
    items: { id: "dance" | "taekwondo"; name: string; text: string }[];
  };
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
      title: "«Ниет-ай» бөбекжай-бақшасы — Байсерке ауылы, Іле ауданы",
      description:
        "«Ниет-ай» бөбекжай-бақшасы: 2–6 жас аралығындағы балаларға арналған 8 топ, қазақ тілінде тәрбие және 4 мезгіл тамақтану. Алматы облысы, Іле ауданы, Байсерке ауылы.",
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
    brand: { name: "«Ниет-ай» бөбекжай-бақшасы", short: "Ниет-ай", logoAlt: "«Ниет-ай» бөбекжай-бақшасы логотипі" },
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      groups: "Топтар",
      clubs: "Үйірмелер",
      food: "Тамақтану",
      gallery: "Галерея",
      documents: "Құжаттар",
      contact: "Байланыс",
    },
    hero: {
      title: "«Ниет-ай» бөбекжай-бақшасына қош келдіңіз!",
      subtitle: "Балаңыздың бақытты балалық шағы мен жарқын болашағына бірге қадам басайық!",
      cta: "Біз туралы",
      call: "Қоңырау шалу",
      imageAlt: "«Ниет-ай» бөбекжай-бақшасы",
    },
    about: {
      eyebrow: "Біз туралы",
      title: "Балаларға арналған мейірімді орта",
      paragraphs: [
        "«Ниет-ай» бөбекжай-бақшасы Алматы облысының Іле ауданы, Байсерке ауылында орналасқан. Бізде 2 мен 6 жас аралығындағы балаларға арналған 8 топ бар.",
        "Тәрбие жұмысы қазақ тілінде жүргізіледі, ал күн тәртібіне 4 мезгіл тамақтану кіреді. Балаңыздың бақытты балалық шағына бірге қамқор болайық!",
      ],
      stats: [
        { value: "8", label: "топ" },
        { value: "2–6", label: "жас" },
        { value: "Қазақ тілінде", label: "тәрбие" },
        { value: "4", label: "мезгіл тамақтану" },
      ],
      mediaAlt: "«Ниет-ай» бөбекжай-бақшасы",
    },
    groups: {
      eyebrow: "Топтар",
      title: "Сегіз топ — сегіз түрлі қуаныш",
      text: "Бөбекжай-бақшамызда 2 мен 6 жас аралығындағы балаларға арналған 8 топ бар. Топтар туралы толық ақпаратты телефон арқылы сұрай аласыз.",
      call: "Қоңырау шалу",
    },
    clubs: {
      eyebrow: "Үйірмелер",
      title: "Біздің үйірмелер",
      text: "Бізде екі үйірме бар: би және таеквондо.",
      items: [
        {
          id: "dance",
          name: "Би үйірмесі",
          text: "Балалардың ырғақ сезімін, икемділігін және қимыл үйлесімділігін дамыту.",
        },
        {
          id: "taekwondo",
          name: "Таеквондо үйірмесі",
          text: "Тәртіптілікке, дене шынықтыруға және өзіне сенімді болуға баулу.",
        },
      ],
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
      photoAlt: (n) => `«Ниет-ай» бөбекжай-бақшасы, ${n}-сурет`,
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
      mapTitle: "«Ниет-ай» бөбекжай-бақшасы 2ГИС картасында",
    },
    footer: { rights: "Барлық құқықтар қорғалған." },
    notFound: { title: "Мұндай бет табылмады", back: "Басты бетке оралу" },
  },
  ru: {
    meta: {
      title: "Детский сад «Ниет-ай» — село Байсерке, Илийский район",
      description:
        "Детский сад «Ниет-ай»: 8 групп для детей от 2 до 6 лет, воспитание на казахском языке и 4-разовое питание. Алматинская область, Илийский район, село Байсерке.",
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
    brand: { name: "Детский сад «Ниет-ай»", short: "Ниет-ай", logoAlt: "Логотип детского сада «Ниет-ай»" },
    nav: {
      home: "Главная",
      about: "О садике",
      groups: "Группы",
      clubs: "Кружки",
      food: "Питание",
      gallery: "Галерея",
      documents: "Документы",
      contact: "Контакты",
    },
    hero: {
      title: "Добро пожаловать в детский сад «Ниет-ай»!",
      subtitle: "Вместе шагнём к счастливому детству и светлому будущему вашего ребёнка!",
      cta: "О садике",
      call: "Позвонить",
      imageAlt: "Детский сад «Ниет-ай»",
    },
    about: {
      eyebrow: "О садике",
      title: "Добрая среда для детей",
      paragraphs: [
        "Детский сад «Ниет-ай» находится в селе Байсерке Илийского района Алматинской области. У нас 8 групп для детей от 2 до 6 лет.",
        "Воспитание ведётся на казахском языке, а в распорядок дня входит 4-разовое питание. Давайте вместе заботиться о счастливом детстве вашего ребёнка!",
      ],
      stats: [
        { value: "8", label: "групп" },
        { value: "2–6", label: "лет" },
        { value: "На казахском", label: "воспитание" },
        { value: "4", label: "приёма пищи" },
      ],
      mediaAlt: "Детский сад «Ниет-ай»",
    },
    groups: {
      eyebrow: "Группы",
      title: "Восемь групп — восемь поводов для радости",
      text: "В нашем детском саду 8 групп для детей от 2 до 6 лет. Подробную информацию о группах можно узнать по телефону.",
      call: "Позвонить",
    },
    clubs: {
      eyebrow: "Кружки",
      title: "Наши кружки",
      text: "У нас два кружка: хореография и таеквондо.",
      items: [
        {
          id: "dance",
          name: "Хореография",
          text: "Развитие чувства ритма, гибкости и координации.",
        },
        {
          id: "taekwondo",
          name: "Таеквондо",
          text: "Развитие дисциплины, физической подготовки и уверенности.",
        },
      ],
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
      photoAlt: (n) => `Детский сад «Ниет-ай», фото ${n}`,
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
      mapTitle: "Детский сад «Ниет-ай» на карте 2ГИС",
    },
    footer: { rights: "Все права защищены." },
    notFound: { title: "Такой страницы нет", back: "Вернуться на главную" },
  },
};

export const sectionOrder: SectionId[] = ["home", "about", "groups", "clubs", "food", "gallery", "documents", "contact"];

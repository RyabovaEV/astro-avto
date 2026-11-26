export interface NavTab {
  label: string;
  slug: string;
}

export interface NavSection {
  label: string;
  base: string;
  tabs: NavTab[];
}

export const navSections: NavSection[] = [
  {
    label: "Главная",
    base: "/",
    tabs: [],
  },
  {
    label: "Расписание",
    base: "/schedule",
    tabs: [
      {
        label: "Пригородные",
        slug: "suburban",
      },
      {
        label: "Городские",
        slug: "city",
      },
    ],
  },
  {
    label: "Автошкола",
    base: "/driving-school",
    tabs: [
      {
        label: "Общая информация",
        slug: "info",
      },
      {
        label: "Перевозка опасных грузов",
        slug: "danger-goods",
      },
      {
        label: "План обучения",
        slug: "training-plan",
      },
      {
        label: "Сведения об образовательной организации",
        slug: "documents",
      },
    ],
  },
  {
    label: "О предприятии",
    base: "/about",
    tabs: [
      {
        label: "Контакты",
        slug: "contacts",
      },
      {
        label: "Вакансии",
        slug: "vacancies",
      },
      {
        label: "Документы",
        slug: "documents",
      },
      {
        label: "Новости",
        slug: "news",
      },
      {
        label: "История",
        slug: "history",
      },
    ],
  },
];

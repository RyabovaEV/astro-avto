export interface NavItem {
  label: string;
  href: string;
}

export const NavItems: NavItem[] = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Расписание",
    href: "/schedule",
  },
  {
    label: "Автошкола",
    href: "/driving-school",
  },
  {
    label: "О предприятии",
    href: "/about",
  },
];

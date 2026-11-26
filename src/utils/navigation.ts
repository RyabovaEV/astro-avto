import type { NavSection, NavTab } from "@/config/navigation";

export function normalizePath(path: string): string {
  return path === "/" ? path : path.replace(/\/+$/, "");
}

export function getTabHref(section: NavSection, tab: NavTab): string {
  if (section.base === "/") {
    throw new Error("Базовый путь не может быть корневым для вкладки.");
  }
  return `${section.base}/${tab.slug}`;
}

export function getSectionHref(section: NavSection): string {
  const [firstTab] = section.tabs;
  if (!firstTab) return section.base;
  return getTabHref(section, firstTab);
}

export function isSectionActive(
  section: NavSection,
  currentPath: string,
): boolean {
  const normalizedCurrentPath = normalizePath(currentPath);
  if (section.base === "/") return normalizedCurrentPath === "/";
  return (
    normalizedCurrentPath === section.base ||
    normalizedCurrentPath.startsWith(section.base + "/")
  );
}

export function isTabActive(
  section: NavSection,
  tab: NavTab,
  currentPath: string,
): boolean {
  const normalizedCurrentPath = normalizePath(currentPath);
  return normalizedCurrentPath === getTabHref(section, tab);
}

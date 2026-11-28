import { ISO_DATE_REGEX } from "./isoDate";

const formatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Europe/Moscow",
});

export function getTodayDate(): string {
  if (import.meta.env.DEV) {
    const mockToday = new URLSearchParams(window.location.search).get(
      "mockToday",
    );
    if (mockToday && ISO_DATE_REGEX.test(mockToday)) {
      return mockToday;
    }
  }

  const today = new Date();
  return formatter.format(today);
}

import { ISO_DATE_REGEX } from "./isoDate";

export type ScheduleVariant = "current" | "upcoming";

export function getScheduleVariant(
  today: string,
  validFrom: string | null,
): ScheduleVariant {
  if (!ISO_DATE_REGEX.test(today)) {
    throw new Error("Передана некорректная дата для 'today'");
  }

  if (validFrom !== null && !ISO_DATE_REGEX.test(validFrom)) {
    throw new Error("Передана некорректная дата для 'validFrom'");
  }

  if (validFrom && today >= validFrom) {
    return "upcoming";
  }
  return "current";
}

const formatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}

export function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

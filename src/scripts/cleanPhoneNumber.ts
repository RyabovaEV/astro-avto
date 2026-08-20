export function cleanPhoneNumber(number: string): string {
  return number.replace(/[^\d+]/g, "");
}

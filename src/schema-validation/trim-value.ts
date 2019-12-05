export function trimValue(value: string | null | undefined): string {
  const val = value == null ? '' : value;
  return val.trim();
}

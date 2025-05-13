export function getDiscountPercentage(original?: number, discount?: number): number | null {
  if (
    typeof original !== "number" ||
    typeof discount !== "number" ||
    discount >= original
  ) {
    return null;
  }

  const percent = ((original - discount) / original) * 100;
  return Math.round(percent);
}
const STORAGE_KEY = 'selectedVariantId';
const EXPIRATION_MS = 15 * 60 * 1000;

export function saveSelectedVariant(variantId: string, sizeId: string) {
  const data = {
    variantId,
    sizeId,
    timestamp: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getValidSelectedVariant(): { variantId: string, sizeId: string } | null {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  try {
    const parsed = JSON.parse(data);
    if (Date.now() - parsed.timestamp > EXPIRATION_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}
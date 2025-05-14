import { Size } from "@/types/product";
import { Variant } from "@/types/product";

export const getFullSizeRangeFromVariants = (variants: Variant[]): Size[] => {
  const sizeNumbers = variants
    .flatMap((variant) => variant.sizes.map((size) => Number(size.id)));

  // Descobre o menor e maior tamanho
  const minSize = Math.min(...sizeNumbers);
  const maxSize = Math.max(...sizeNumbers);

  // Gera o range completo de tamanhos entre o menor e maior
  const allSizes = Array.from({ length: maxSize - minSize + 1 }, (_, i) => {
    const sizeValue = (minSize + i).toString();
    const label =
      variants
        .flatMap((v) => v.sizes)
        .find((s) => s.id === sizeValue)?.label ?? sizeValue;

    return { id: sizeValue, label };
  });

  return allSizes;
}
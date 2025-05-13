import { getFullSizeRangeFromVariants } from "@/helpers/getFullSizeRangeFromVariants";
import { Button } from "./ui/button";

interface SelectSizeProps {
  selectedVariantId: string;
  setSelectedSizeId: (sizeId: string | null) => void;
  selectedSizeId: string | null;
  product: {
    variants: {
      id: string;
      color: string;
      thumbnail: string;
      images: string[];
      sizes: {
        id: string;
        label: string;
      }[];
    }[];
  };
}

export function SelectSize({ selectedVariantId, setSelectedSizeId, product, selectedSizeId }: SelectSizeProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-gray-700">Selecione o tamanho</span>
      <div className="flex flex-wrap gap-3">
        {getFullSizeRangeFromVariants(product.variants).map((size) => {
          const isAvailable = product.variants.some((v) => v.id === selectedVariantId && v.sizes.some((s) => s.id === size.id));

          return (
            <Button
              key={size.id}
              variant={selectedSizeId === size.id ? "default" : "outline"}
              className="px-5 py-2"
              onClick={() => isAvailable && setSelectedSizeId(size.id)}
              disabled={!isAvailable}
            >
              {size.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

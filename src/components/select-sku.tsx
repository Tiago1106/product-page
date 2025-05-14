import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

interface SelectSKUProps {
  selectedVariantId: string;
  setSelectedVariantId: (variantId: string) => void;
  setSelectedImage: (image: string) => void;
  setSelectedSizeId: (sizeId: string | null) => void;
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
  isLoading?: boolean;
}

export function SelectSku({ selectedVariantId, setSelectedVariantId, setSelectedImage, setSelectedSizeId, product, isLoading }: SelectSKUProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <span className="font-medium text-gray-700">Selecione a cor:</span>
        <span className="text-sm text-gray-700">
          {product.variants.find(variant => variant.id === selectedVariantId)?.color}
        </span>
      </div>
      <div className="flex overflow-x-auto gap-2 pb-2">
        {isLoading ? (
          <Skeleton className="w-20 h-20 rounded-md" />
        ) : (
          product.variants.map((variant) => (
            <Image
              key={variant.id}
              src={variant.thumbnail}
              alt={variant.color}
              width={80}
            height={80}
            onClick={() => {
              setSelectedVariantId(variant.id);
              setSelectedImage(variant.images[0]);
              setSelectedSizeId(null);
            }}
            className={`object-cover rounded-md cursor-pointer border-2 ${selectedVariantId === variant.id ? "border-black" : "border-transparent"
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
}

import Image from "next/image";

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
}

export function SelectSku({ selectedVariantId, setSelectedVariantId, setSelectedImage, setSelectedSizeId, product }: SelectSKUProps) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2">
      {product.variants.map((variant) => (
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
      ))}
    </div>
  );
}

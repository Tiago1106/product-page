import { formatToBRL } from "@/helpers/formatPrice";
import { TagDiscount } from "./tag-discount";

interface PriceProductProps {
  originalPrice: number;
  discountPrice: number;
}

export function PriceProduct({ originalPrice, discountPrice }: PriceProductProps) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-extrabold">
        {formatToBRL(discountPrice ?? originalPrice)}
      </span>

      {discountPrice &&
        discountPrice < originalPrice && (
          <>
            <span className="text-lg text-gray-500 line-through">
              {formatToBRL(originalPrice)}
            </span>
            <TagDiscount
              originalPrice={originalPrice}
              discountPrice={discountPrice}
            />
          </>
        )}
    </div>
  );
}

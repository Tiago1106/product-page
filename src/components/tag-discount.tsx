import { getDiscountPercentage } from "@/helpers/getDiscountPercentage";

interface TagDiscountProps {
  originalPrice?: number;
  discountPrice?: number;
}

export function TagDiscount({ originalPrice, discountPrice }: TagDiscountProps) {
  const discount = getDiscountPercentage(originalPrice, discountPrice);

  if (!discount) return null;

  return (
    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
      {discount}% OFF
    </span>
  );
}
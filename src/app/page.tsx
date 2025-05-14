'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { product } from "@/data/product-mock";
import { ImagesProducts } from "@/components/images-products";
import { PriceProduct } from "@/components/price-product";
import { SelectSku } from "@/components/select-sku";
import { SelectSize } from "@/components/select-size";
import { AccordionDescription } from "@/components/accordion-description";
import { Shipping } from "@/components/shipping";
import Reviews from "@/components/reviews";
import { getValidSelectedVariant, saveSelectedVariant } from "@/lib/storeVariante";

export default function ProductPage() {
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = getValidSelectedVariant();
    const variantId = stored && product.variants.find(v => v.id === stored.variantId)
      ? stored.variantId
      : product.variants[0].id;

    const sizeId = stored && stored.sizeId
      ? stored.sizeId
      : null;

    const variant = product.variants.find(v => v.id === variantId)!;

    setSelectedVariantId(variantId);
    setSelectedSizeId(sizeId);
    setSelectedImage(variant.images[0]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedVariantId) {
      saveSelectedVariant(selectedVariantId, selectedSizeId || '');
    }
  }, [selectedVariantId, selectedSizeId]);

  const currentVariant = product.variants.find(v => v.id === selectedVariantId)!;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 justify-center md:px-8 flex-wrap max-w-6xl mb-16">
        <ImagesProducts
          selectedImage={selectedImage || ''}
          setSelectedImage={setSelectedImage}
          currentVariant={currentVariant}
          isLoading={isLoading}
        />
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <PriceProduct
            originalPrice={product.originalPrice}
            discountPrice={product.discountPrice}
          />
          <SelectSku
            selectedVariantId={selectedVariantId || ''}
            setSelectedVariantId={setSelectedVariantId}
            setSelectedImage={setSelectedImage}
            setSelectedSizeId={setSelectedSizeId}
            product={product}
          />
          <SelectSize
            selectedVariantId={selectedVariantId || ''}
            setSelectedSizeId={setSelectedSizeId}
            product={product}
            selectedSizeId={selectedSizeId}
          />
          <div className="flex flex-col">
            <Button variant="default">Adicionar ao carrinho</Button>
          </div>
          <AccordionDescription description={product.description} />
          <Shipping />
        </div>
      </div>

      <Reviews reviews={product.reviews} />
    </div>
  );
}

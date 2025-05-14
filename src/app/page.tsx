'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { product } from "@/data/product-mock";

import { ImagesProducts } from "@/components/images-products";
import { PriceProduct } from "@/components/price-product";
import { SelectSku } from "@/components/select-sku";
import { SelectSize } from "@/components/select-size";
import { AccordionDescription } from "@/components/accordion-description";
import { Shipping } from "@/components/shipping";
import { StarRating } from "@/components/star-rating";

export default function ProductPage() {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const [selectedImage, setSelectedImage] = useState(product.variants[0].images[0]);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

  const currentVariant = product.variants.find(v => v.id === selectedVariantId)!;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 justify-center md:px-8 flex-wrap max-w-6xl mb-16">
        <ImagesProducts
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          currentVariant={currentVariant}
        />
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <PriceProduct
            originalPrice={product.originalPrice}
            discountPrice={product.discountPrice}
          />
          <SelectSku
            selectedVariantId={selectedVariantId}
            setSelectedVariantId={setSelectedVariantId}
            setSelectedImage={setSelectedImage}
            setSelectedSizeId={setSelectedSizeId}
            product={product}
          />
          <SelectSize
            selectedVariantId={selectedVariantId}
            setSelectedSizeId={setSelectedSizeId}
            product={product}
            selectedSizeId={selectedSizeId}
          />
          <div className="flex flex-col">
            <Button variant="default">
              Adicionar ao carrinho
            </Button>
          </div>
          <AccordionDescription description={product.description} />
          <Shipping />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:px-8 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900">Avaliação e Comentários</h2>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <StarRating rating={product.reviews.rating} totalReviews={product.reviews.total} breakdown={product.reviews.breakdown} />
          </div>
          <div className="flex flex-col gap-4 max-w-[457px]">
            <StarRating rating={product.reviews.rating} totalReviews={product.reviews.total} breakdown={product.reviews.breakdown} />
          </div>
        </div>
      </div>

    </div>
  );
}

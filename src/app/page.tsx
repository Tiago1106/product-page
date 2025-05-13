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

export default function ProductPage() {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const [selectedImage, setSelectedImage] = useState(product.variants[0].images[0]);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

  const currentVariant = product.variants.find(v => v.id === selectedVariantId)!;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-8 justify-center md:px-8 flex-wrap">
        {/* Imagens */}
        <ImagesProducts
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          currentVariant={currentVariant}
        />

        {/* Detalhes */}
        <div className="flex-1 flex flex-col gap-6 max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* Preço */}
          <PriceProduct
            originalPrice={product.originalPrice}
            discountPrice={product.discountPrice}
          />

          {/* Seleção de Cor */}
          <SelectSku
            selectedVariantId={selectedVariantId}
            setSelectedVariantId={setSelectedVariantId}
            setSelectedImage={setSelectedImage}
            setSelectedSizeId={setSelectedSizeId}
            product={product}
          />

          {/* Seleção de Tamanho */}
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
    </div>
  );
}

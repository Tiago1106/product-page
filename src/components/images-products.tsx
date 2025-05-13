import Image from "next/image";

interface ImagesProductsProps {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  currentVariant: {
    images: string[];
    sizes: {
      id: string;
      label: string;
    }[];
  };
}

export function ImagesProducts({ selectedImage, setSelectedImage, currentVariant }: ImagesProductsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={selectedImage}
        alt="Produto"
        width={600}
        height={600}
        className="object-cover rounded-lg"
      />
      <div className="flex flex-row gap-4 overflow-x-auto max-w-[600px]">
        {currentVariant.images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Miniatura"
            width={100}
            height={100}
            onClick={() => setSelectedImage(image)}
            className={`object-cover rounded-lg cursor-pointer border-2 ${selectedImage === image ? "border-black" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}

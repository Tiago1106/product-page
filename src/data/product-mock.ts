export const product = {
  id: "nike-air-force-evo",
  title: "Tênis Nike Air Force 1 EVO Masculino",
  originalPrice: 729.99,
  discountPrice: 694.99,
  description: "Confortável, durável e atemporal - não é à toa que ele é o número 1. Os detalhes recortados expõem um logo Swoosh em tecido premium e unidades Air em todo o comprimento no solado, revelando o Air Force 1 de uma nova maneira. A construção clássica dos anos 80 é combinada com detalhes ousados para estilo que acompanha se você está na quadra ou em movimento.",
  reviews: {
    rating: 4.0,
    breakdown: {
      1: 12,
      2: 4,
      3: 12,
      4: 35,
      5: 57,
    },
    total: 120,
  },
  variants: [
    {
      id: "blue",
      color: "Azul",
      thumbnail: "/images/blue/01.avif",
      images: [
        "/images/blue/01.avif",
        "/images/blue/02.avif",
        "/images/blue/03.avif",
        "/images/blue/04.avif",
      ],
      sizes: [
        { id: "37", label: "37" },
        { id: "38", label: "38" },
        { id: "40", label: "40" },
        { id: "43", label: "43" },
      ],
    },
    {
      id: "green",
      color: "Verde",
      thumbnail: "/images/green/01.avif",
      images: [
        "/images/green/01.avif",
        "/images/green/02.avif",
        "/images/green/03.avif",
        "/images/green/04.avif",
        "/images/green/05.avif",
      ],
      sizes: [
        
        { id: "39", label: "39" },
        { id: "40", label: "40" },
        { id: "41", label: "41" },
        { id: "44", label: "44" },
      ],
    },
    {
      id: "white",
      color: "Branco",
      thumbnail: "/images/white/01.avif",
      images: [
        "/images/white/01.avif",
        "/images/white/02.avif",
        "/images/white/03.avif",
        "/images/white/04.avif",
      ],
      sizes: [
        { id: "38", label: "38" },
        { id: "39", label: "39" },
        { id: "40", label: "40" },
        { id: "41", label: "41" },
        { id: "42", label: "42" },
        { id: "43", label: "43" },
        { id: "44", label: "44" },
      ],
    },
  ],
};
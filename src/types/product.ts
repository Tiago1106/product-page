export type Breakdown = {
  [key: number]: number;
};

export type Size = {
  id: string;
  label: string;
}

export type Variant = {
  id: string;
  color: string;
  thumbnail: string;
  images: string[];
  sizes: Size[];
}

export type Review = {
  rating: number;
  total: number;
  breakdown: Breakdown;
  comments: Comment[];
}

export type Comment = {
  author: string;
  date: string;
  rating: number;
  content: string;
}

export type Product = {
  id: string;
  title: string;
  originalPrice: number;
  discountPrice: number;
  description: string;
  reviews: Review;
  variants: Variant[];
}
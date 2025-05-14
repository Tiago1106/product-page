import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { Breakdown } from "@/types/product";
interface StarRatingProps {
  rating: number;
  totalReviews: number;
  breakdown: Breakdown;
}

export function StarRating({ rating, totalReviews, breakdown }: StarRatingProps) {
  const maxCount = Math.max(...Object.values(breakdown));
  
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-end">
          <span className="text-9xl font-bold">{rating}</span>
          <span className="text-2xl text-gray-500">/5</span>
        </div>
        <span className="text-md text-gray-500">{totalReviews} avaliações</span>
      </div>
      <div className="flex flex-col-reverse gap-2">
        {Object.entries(breakdown).map(([star, count]) => (
          <div key={star} className="flex flex-row gap-2 items-center justify-between">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-md text-gray-500">{star}</span>
            <Progress value={(count / maxCount) * 100} className="w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  )
}
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CommentCardProps {
  author: string;
  date: string;
  rating: number;
  content: string;
}

export function CommentCard({ author, date, rating, content }: CommentCardProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <Card className="w-full md:h-[160px] md:gap-1 md:py-4">
      <CardHeader>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{author}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1 mt-2">
          {stars.map((filled, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${filled ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="mt-2 text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
};
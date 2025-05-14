import { CommentCard } from "./comment-card";
import { StarRating } from "./star-rating";

interface ReviewsProsps {
  reviews: {
    rating: number,
    total: number,
    breakdown: {
      [key: number]: number;
    }
    comments: {
      author: string,
      date: string,
      rating: number,
      content: string
    }[]
  }
}

export default function Reviews({ reviews }: ReviewsProsps) {
  return (
    <div className="flex flex-col gap-8 md:px-8 w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-gray-900">Avaliação e Comentários</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <StarRating rating={reviews.rating} totalReviews={reviews.total} breakdown={reviews.breakdown} />
        </div>
        <div className="flex flex-col md:flex-row md:overflow-x-auto gap-4">
          {reviews.comments.map((comment, index) => (
            <div className="flex-none md:w-[457px]" key={index}>
              <CommentCard
                author={comment.author}
                date={comment.date}
                rating={comment.rating}
                content={comment.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
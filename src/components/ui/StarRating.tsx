interface StarRatingProps {
    rating: number;
}

export default function StarRating({rating}: StarRatingProps) {
    const stars = Math.round(rating)

    return (
      <div>
        {Array.from({ length: stars }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    );
}

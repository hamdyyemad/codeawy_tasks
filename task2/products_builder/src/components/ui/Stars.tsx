import { StarEmpty, StarFull, StarHalf } from "./svg_icons/SVGIcons";

interface Props {
  rating: number;
}

export default function Stars({ rating }: Props) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((el, i) => {
        if (el - rating <= 0) return <StarFull key={i} />;
        else {
          // Either empty or half
          return el - rating === 1 || el - rating > 1 ? (
            <StarEmpty key={i} />
          ) : (
            <StarHalf key={i} />
          );
        }
      })}
    </>
  );
}

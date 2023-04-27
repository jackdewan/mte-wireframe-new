import { ArticleType } from "../util/types";
import { Card } from "./Card";
import { CardArticle } from "./CardArticle";

interface CardContainerProps {
  data: ArticleType[];
}

export const CardContainer = ({ data }: CardContainerProps) => {
  return (
    <div className="overflow-x-scroll lg:overflow-auto lg:container">
      <div className="flex lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-6 xl:gap-12 scroll-pl-5 lg:scroll-pl-0 snap-x lg:snap-none">
        {data.map((card) => (
          <div
            key={card.title}
            className="w-[80vw] sm:w-[50vw] shrink-0 lg:shrink snap-start lg:snap-none mr-5 lg:mr-0 lg:w-full last:pr-5 first:pl-5 lg:last:pr-0 lg:first:pl-0"
          >
            <CardArticle data={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

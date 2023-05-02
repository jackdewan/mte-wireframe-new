import { ArticleType } from "../util/types";
import { CardArticle } from "../stories/CardArticle";

interface CardContainerBlogProps {
  title: string;
  data: ArticleType[];
  tag?: boolean;
  meta?: boolean;
}

export const CardContainerPage = ({
  title,
  data,
  tag,
  meta,
}: CardContainerBlogProps) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((article, i) => (
            <CardArticle key={i} data={article} tag={tag} meta={meta} />
          ))}
        </div>
      </div>
    </section>
  );
};

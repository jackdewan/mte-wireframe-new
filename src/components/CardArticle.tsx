import { ArticleType } from "../util/types";
import { PlaceholderImg } from "./Placeholder";
import { Button } from "../stories/Button";

interface CardArticleProps {
  data: ArticleType;
  tag?: boolean;
  meta?: boolean;
}

export const CardArticle = ({ data, tag, meta }: CardArticleProps) => {
  return (
    <article
      key={data.title}
      className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5"
    >
      <div className="aspect-video">
        <PlaceholderImg />
      </div>
      {tag && (
        <span className="bg-gray-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          {data.type}
        </span>
      )}
      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{data.title}</a>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {meta && (
        <div className="flex items-center space-x-4">
          <div className=" rounded-full h-8 w-8 p-2 bg-gray-300">
            <PlaceholderImg />
          </div>
          <div className="font-medium dark:text-white">
            <div>Jane Doe</div>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Aug 15, 2023 · 16 min read
            </div>
          </div>
        </div>
      )}
      {data.buttonLabel && <Button label={data.buttonLabel} />}
    </article>
  );
};

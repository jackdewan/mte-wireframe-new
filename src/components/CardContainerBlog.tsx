import { PlaceholderImg } from "./Placeholder";

const articles = [1, 2, 3];

export const CardContainerBlog = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="aspect-video">
                <PlaceholderImg />
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                Article
              </span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lorem ipsum dolor</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import Link from "next/link";

const articles = [1, 2, 3];

export default function BlogHomePage() {
  return (
    <div className="container">
      <h2>Blog Home Page</h2>
      <ul>
        {articles.map((article) => (
          <li key={article} className="hover:underline">
            <Link href={`/blog/article${article}`}>Article {article}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

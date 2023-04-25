import Link from "next/link";

const articles = [1, 2, 3];

export default function EventsPage() {
  return (
    <div className="container">
      <h1>Events Page</h1>
      <ul>
        {articles.map((article) => (
          <li key={article} className="hover:underline">
            <Link href={`/blog/article${article}`}>Event {article}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

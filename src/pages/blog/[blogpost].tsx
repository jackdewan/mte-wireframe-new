import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="container">
      <Link href="/blog">{"< "}Back</Link>
      <h1>Article</h1>
    </div>
  );
}

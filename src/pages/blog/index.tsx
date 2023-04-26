import { CardContainerBlog } from "@/components/CardContainerBlog";
import Link from "next/link";

const articles = [1, 2, 3];

export default function BlogHomePage() {
  return (
    <div className="container">
      <CardContainerBlog />
    </div>
  );
}

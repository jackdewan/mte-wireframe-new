import { ImageCTA } from "@/stories/ImageCTA";
import Link from "next/link";
import { Typography } from "./Typography";

interface CategoryIndexPageProps {
  data: {
    category: string;
  };
}

const products = [1, 2, 3, 4];

export const CategoryIndexPage = ({ data }: CategoryIndexPageProps) => {
  const { category } = data;
  return (
    <div className="container py-16">
      <Typography as="h1">{`${category} Category Page`}</Typography>
      <p>Category: {category}</p>
      {products.map((product, i) => (
        <ImageCTA
          key={product}
          heading={`${category} Product ${i + 1}`}
          left={i % 2 === 0}
        />
      ))}
    </div>
  );
};

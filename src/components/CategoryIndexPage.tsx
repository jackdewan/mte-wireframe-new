import { Switchback } from "../stories/Switchback";
import Link from "next/link";
import { Typography } from "./Typography";
import { products } from "../util/data";

interface CategoryIndexPageProps {
  data: {
    category: string;
  };
}

export const CategoryIndexPage = ({ data }: CategoryIndexPageProps) => {
  const { category } = data;
  return (
    <div className="container py-16">
      <div className="text-center space-y-6 max-w-xl mx-auto">
        <Typography as="h1">{`${category} Category Page`}</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>

      {products
        .filter((product) => product.category.toLowerCase() === category)
        .map((product, i) => (
          <Switchback
            key={product.title}
            title={product.title}
            subtitle={product.description}
            titleSize={"md"}
            left={i % 2 !== 0}
          />
        ))}
    </div>
  );
};

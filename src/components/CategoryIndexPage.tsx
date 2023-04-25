import Link from "next/link";

interface CategoryIndexPageProps {
  data: {
    category: string;
  };
}

const products = [1, 2, 3];

export const CategoryIndexPage = ({ data }: CategoryIndexPageProps) => {
  const { category } = data;
  return (
    <div className="container">
      <h2>Category Index Page</h2>
      <p>Category: {category}</p>
      <ul className="list-disc ml-5">
        {products.map((product) => (
          <li key={product}>
            <Link href={`/collections/${category}/product-${product}`}>
              Product {product}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

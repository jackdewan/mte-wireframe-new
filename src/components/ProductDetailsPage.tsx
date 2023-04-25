import { useRouter } from "next/router";

export const ProductDetailsPage = () => {
  const router = useRouter();
  const { product } = router.query;
  return (
    <div className="container">
      <button type="button" onClick={() => router.back()}>
        {"<"} Back
      </button>
      <h2>Product Details Page</h2>
      <p>Product: {product}</p>
    </div>
  );
};

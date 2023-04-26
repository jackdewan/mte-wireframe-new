import { Typography } from "@/components/Typography";
import { ImageCTA } from "@/stories/ImageCTA";
import { categories } from "@/util/config";

export default function CategoriesPage() {
  return (
    <div className="container py-16">
      <Typography as="h2">All Categories Page</Typography>
      {categories.map((category, i) => (
        <ImageCTA
          left={i % 2 === 0}
          ctaBtnLabel="Learn More"
          heading={`${category}`}
        />
      ))}
    </div>
  );
}

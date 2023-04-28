import { Typography } from "../../components/Typography";
import { Switchback } from "../../stories/Switchback";
import { categories } from "../../util/data";

export default function CategoriesPage() {
  return (
    <div className="container py-16">
      <div className="text-center">
        <Typography as="h2">All Categories Page</Typography>
      </div>
      {categories.map((category, i) => (
        <Switchback
          key={category.title}
          left={i % 2 !== 0}
          btnLabel="Learn More"
          title={`${category.title}`}
          subtitle={category.description}
        />
      ))}
    </div>
  );
}

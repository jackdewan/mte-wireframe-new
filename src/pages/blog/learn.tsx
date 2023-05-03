import { CardContainerPage } from "../../components/CardContainerPage";
import { articles } from "../../util/data";

const learnings = articles.filter((article) => article.type === "Education");

export default function LearnHomePage() {
  return (
    <div className="container">
      <CardContainerPage title="Learning Center" data={learnings} meta />
    </div>
  );
}

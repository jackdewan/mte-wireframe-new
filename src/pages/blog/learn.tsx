import { CardContainerPage } from "../../components/CardContainerPage";
import { articles } from "../../util/data";

export default function LearnHomePage() {
  return (
    <div className="container">
      <CardContainerPage title="Learn Home Page" data={articles} meta />
    </div>
  );
}

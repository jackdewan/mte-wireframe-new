import { CardContainerPage } from "../../components/CardContainerPage";
import { learnings } from "../../util/data";

export default function LearnHomePage() {
  return (
    <div className="container">
      <CardContainerPage title="Learning Center" data={learnings} meta />
    </div>
  );
}

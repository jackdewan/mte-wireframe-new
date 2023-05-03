import { CardContainerPage } from "../../components/CardContainerPage";
import { articles } from "../../util/data";

const events = articles.filter((article) => article.type === "Event");

export default function EventsPage() {
  return (
    <div className="container">
      <CardContainerPage title="Events" data={events} />
    </div>
  );
}

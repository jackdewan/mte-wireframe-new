import { CardContainerPage } from "../../components/CardContainerPage";
import { events } from "../../util/data";

export default function EventsPage() {
  return (
    <div className="container">
      <CardContainerPage title="Events" data={events} />
    </div>
  );
}

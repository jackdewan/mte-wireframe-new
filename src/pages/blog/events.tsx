import { CardContainerEvents } from "@/components/CardContainerEvents";
import Link from "next/link";

const articles = [1, 2, 3];

export default function EventsPage() {
  return (
    <div className="container">
      <h1>Events Page</h1>
      <CardContainerEvents />
    </div>
  );
}

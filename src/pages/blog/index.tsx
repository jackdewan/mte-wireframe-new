import { CardContainerPage } from "../../components/CardContainerPage";

import { articles } from "../../util/data";

export default function BlogHomePage() {
  return (
    <div className="container">
      <CardContainerPage data={articles} title="Our Blog" meta />
    </div>
  );
}

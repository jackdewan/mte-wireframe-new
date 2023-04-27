import { FAQ } from "../components/FAQ";
import { Typography } from "../components/Typography";

export default function FAQPage() {
  return (
    <div className="container">
      <div className="py-16 text-center">
        <Typography as="h1">Frequently Asked Questions</Typography>
      </div>
      <FAQ />
    </div>
  );
}

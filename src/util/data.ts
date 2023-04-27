import { BoltIcon } from "../stories/assets/BoltIcon";
import { BoltSlashIcon } from "@heroicons/react/24/outline";
import { HeroIconType } from "./types";

export interface FeaturesProps {
  data: FeatureItemProps[];
}

export interface FeatureItemProps {
  title: string;
  Icon: HeroIconType | React.FunctionComponent;
}

export const features = [
  {
    title: "Feature 1",
    Icon: BoltIcon,
  },
  {
    title: "Feature 2",
    Icon: BoltIcon,
  },
  {
    title: "Feature 3",
    Icon: BoltIcon,
  },
  {
    title: "Feature 4",
    Icon: BoltIcon,
  },
  {
    title: "Feature 5",
    Icon: BoltIcon,
  },
  {
    title: "Feature 6",
    Icon: BoltIcon,
  },
];

export const featuredProducts = [
  {
    title: "Featured Product",
    type: "product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
  },
  {
    title: "Event Article",
    type: "event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
  },
  {
    title: "Education Article",
    type: "learn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
  },
];

export const events = [
  {
    title: "Event 1",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 2",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 3",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const articles = [
  {
    title: "Article 1",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article 2",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article 3",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

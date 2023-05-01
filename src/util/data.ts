import { SwitchbackProps } from "@/stories/Switchback";
import { BoltIcon } from "../stories/assets/BoltIcon";
import { ArticleType } from "./types";

export const categories: {
  title: string;
  description: string;
  btnLabel: string;
}[] = [
  {
    title: "Vape",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    btnLabel: "Learn More",
  },
  {
    title: "Concentrate",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Edible",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    btnLabel: "Learn More",
  },
  {
    title: "Infusion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },

  {
    title: "Gummies",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
];

export const hero = {
  title: "Cannabis in Living Color",
  subtitle:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  btnLabel: "Learn More",
};

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

export const happenings = [
  {
    title: "Featured Product",
    type: "product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
    slug: "Featured Product",
  },
  {
    title: "Event Article",
    type: "event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
    slug: "Event Article",
  },
  {
    title: "Education Article",
    type: "learn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Learn More",
    slug: "Learn Article",
  },
];

export const homeSwitchbacks: SwitchbackProps[] = [
  {
    title: "Featured Product",
    subtitle:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    btnLabel: "Learn More",
    btnPath: "/collections/concentrate",
  },
  {
    title: "Another Featured Product or Category",
    subtitle:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
    btnPath: "/collections/vape",
  },
];

export const events = [
  {
    title: "Event 1",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
  {
    title: "Event 2",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
  {
    title: "Event 3",
    type: "Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
];

export const articles = [
  {
    title: "Article 1",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
  {
    title: "Article 2",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
  {
    title: "Article 3",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
];

export const learnings: ArticleType[] = [
  {
    title: "Learn Article 1",
    type: "learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Learn",
  },
  {
    title: "Learn Article 2",
    type: "learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Learn",
  },
  {
    title: "Learn Article 3",
    type: "learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Learn",
  },
];

export const products: {
  title: string;
  category: "vape" | "concentrate" | "infusion" | "gummies" | "edible";
  description: string;
  btnLabel: string;
}[] = [
  {
    title: "La Luz",
    category: "vape",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    btnLabel: "Learn More",
  },
  {
    title: "Live Resin",
    category: "vape",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Dry Ran",
    category: "vape",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    btnLabel: "Learn More",
  },
  {
    title: "Diamonds",
    category: "concentrate",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Live Resin",
    category: "concentrate",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Dry Ran",
    category: "concentrate",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Gummies - Traditional",
    category: "gummies",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Gummies - Sleep",
    category: "gummies",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Gummies - Alive",
    category: "gummies",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Gummies - Balance",
    category: "gummies",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Lollipops",
    category: "infusion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Tiki Juice",
    category: "infusion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Salve",
    category: "infusion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
  {
    title: "Oasis",
    category: "infusion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    btnLabel: "Learn More",
  },
];

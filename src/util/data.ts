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

export const articles: ArticleType[] = [
  {
    title: "Article 1",
    type: "Article",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
  {
    title: "Learn Article 1",
    type: "Education",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Learn",
  },
  {
    title: "Event 1",
    type: "Event",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
  {
    title: "Article 2",
    type: "Article",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
  {
    title: "Event 2",
    type: "Event",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
  {
    title: "Article 3",
    type: "Article",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog/Article",
  },
  {
    title: "Event 3",
    type: "Event",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Event",
  },
  {
    title: "Learn Article 2",
    type: "Education",
    featured: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Learn",
  },
  {
    title: "Learn Article 3",
    type: "Education",
    featured: false,
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

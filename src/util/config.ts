const SITE_URL = "";

export const Config = {
  site: {
    owner: "Mountaintop Extracts",
    ownerShort: "MTE",
    title: "Mountaintop Extracts",
    domain: "",
    email: "",
    feedDescription: "",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "mte",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Products",
      path: "/collections/products",
      subItems: [
        {
          displayName: "Edible",
          path: "/collections/edible",
        },
        {
          displayName: "Vape",
          path: "/collections/vape",
        },
        {
          displayName: "Gummies",
          path: "/collections/gummies",
        },
        {
          displayName: "Concentrate",
          path: "/collections/concentrate",
        },
        {
          displayName: "Infusion",
          path: "/collections/infusion",
        },
        {
          displayName: "All Categories",
          path: "/collections/categories",
        },
      ],
    },
    {
      displayName: "Company",
      path: "/",
      subItems: [
        {
          displayName: "Our Story",
          path: "/our-story",
        },
        {
          displayName: "Events",
          path: "/blog/events",
        },
        {
          displayName: "FAQ",
          path: "/faq",
        },
        {
          displayName: "Contact Us",
          path: "/contact",
        },

        {
          displayName: "Compliance",
          path: "/compliance",
        },
      ],
    },
    {
      displayName: "Learn",
      path: "/",
      subItems: [
        {
          displayName: "Articles",
          path: "/blog",
        },
        {
          displayName: "Learning Center",
          path: "/blog/learn",
        },
      ],
    },
  ],
  menuLinksRight: [
    {
      displayName: "Find Us",
      path: "/locator",
      subItems: [],
    },
    {
      displayName: "Merch",
      path: "/merch",
      subItems: [],
    },
  ],
  footerLinks: [
    {
      displayName: "Privacy Policy",
      path: "/privacy-policy",
      subItems: [],
    },
    {
      displayName: "Terms and Conditions",
      path: "/terms-and-conditions",
      subItems: [],
    },
    {
      displayName: "Compliance",
      path: "/compliance",
      subItems: [],
    },
    {
      displayName: "Newsletter",
      path: "/newsletter",
      subItems: [],
    },
    {
      displayName: "Contact",
      path: "/contact",
      subItems: [],
    },
  ],
};

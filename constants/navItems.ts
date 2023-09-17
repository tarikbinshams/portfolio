interface INavItem {
  href?: any;
  content: string;
  childCategory?: boolean;
  childrenItems?: INavItem[];
  icon?: string;
  cover?: string;
  active?: boolean;
}

export const NAV_ITEMS: INavItem[] = [
  {
    content: "Home",
    href: "/",
    childrenItems: [],
  },
  {
    content: "Services",
    href: "#services",
    childrenItems: [],
  },
  {
    content: "Technology Stack",
    href: "#technology-stack",
    childrenItems: [],
  },
  {
    content: "Portfolio",
    href: "#portfolio",
    childrenItems: [],
  },
  {
    content: "Contact us",
    href: "#contact-us",
    childrenItems: [],
  },
  {
    content: "Testimonials",
    href: "#testimonials",
    childrenItems: [],
  },
  {
    content: "Blog",
    href: "/blogs",
    childrenItems: [],
  },
];

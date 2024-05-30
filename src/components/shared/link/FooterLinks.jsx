import FooterNavLink from "./FooterNavLink";

const linksItem = [
  {
    title: "My Account",
    items: [
      { text: "My Account", link: "/my-account" },
      { text: "Order History", link: "/order-history" },
      { text: "Shopping Cart", link: "/shopping-cart" },
      { text: "Wishlist", link: "/wishlist" },
    ],
  },
  {
    title: "Helps",
    items: [
      { text: "Contact", link: "/contact" },
      { text: "Faqs", link: "/faqs" },
      { text: "Terms & Condition", link: "/terms-condition" },
      { text: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    title: "Proxy",
    items: [
      { text: "About", link: "/about" },
      { text: "Shop", link: "/shop" },
      { text: "Product", link: "/product" },
      { text: "Track Order", link: "/track-order" },
    ],
  },
  {
    title: "Categories",
    items: [
      { text: "Fruit & Vegetables", link: "/fruit-vegetables" },
      { text: "Meat & Fish", link: "/meat-fish" },
      { text: "Bread & Bakery", link: "/bread-bakery" },
      { text: "Beauty & Health", link: "/beauty-health" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
      {linksItem?.map((navIte) => (
        <FooterNavLink item={navIte} key={navIte?.title}></FooterNavLink>
      ))}
    </ul>
  );
};

export default FooterLinks;

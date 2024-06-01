"use client";
import { IoMdMenu } from "react-icons/io";
import NavLink from "./NavLink";
import { useState } from "react";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About Us",
    link: "/about-us",
  },
  {
    text: "Contact Us",
    link: "/contact-us",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <ul className="hidden md:flex flex-row items-center gap-8 ">
        {navItems?.map((navIte) => (
          <NavLink item={navIte} key={navIte?.text}></NavLink>
        ))}
      </ul>
      <div>
        <IoMdMenu
          className="text-white text-2xl inline md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      {open && (
        <div className="absolute top-11 left-0 bg-[#333333] w-40 px-6 py-4">
          <ul className="flex md:hidden flex-col items-start gap-8 ">
            {navItems?.map((navIte) => (
              <NavLink item={navIte} key={navIte?.text}></NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Links;

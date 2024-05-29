"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.link}
      className={`${
        pathName === item.link
          ? "font-poppins text-sm font-medium text-white"
          : "font-poppins text-sm font-medium text-[#999999] hover:text-white transition-all ease-in-out duration-500"
      }`}
    >
      {item.text}
    </Link>
  );
};

export default NavLink;

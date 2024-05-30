"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterNavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-center md:items-start ">
      <h1 className="font-poppins font-medium text-base text-white mb-5">
        {item.title}
      </h1>
      <li className="flex flex-col items-center md:items-start gap-4">
        {item?.items?.map((fNav) => (
          <Link
            key={fNav?.text}
            href={fNav.link}
            className={`${
              pathName === fNav.link
                ? "font-poppins text-sm font-medium text-white"
                : "font-poppins text-sm font-medium text-[#999999] hover:text-white transition-all ease-in-out duration-500"
            }`}
          >
            {fNav.text}
          </Link>
        ))}
      </li>
    </div>
  );
};

export default FooterNavLink;

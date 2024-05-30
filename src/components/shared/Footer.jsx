import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import FooterLinks from "./link/FooterLinks";
import applePay from "../../../public/images/applePay.png";
import discover from "../../../public/images/discover.png";
import mastercard from "../../../public/images/mastercard.png";
import securePay from "../../../public/images/securePay.png";
import visa from "../../../public/images/visa.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="container flex-col md:flex-row items-center md:items-start gap-12 md:gap-28 py-14">
        {/* Footer Brands */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-md">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Image src={logo} height={32} width={32} alt="logo" />
            <p className="font-inter text-lg md:text-[32px] font-bold text-white">
              FreshCart
            </p>
          </Link>
          <p className="font-poppins text-sm font-normal text-[#808080] text-center md:text-left">
            FreshCart is an ecommerce grocery website built using Next.js. The
            website provides a seamless shopping experience, allowing users to
            browse and purchase grocery items online.
          </p>
          <div className="flex flex-row items-center gap-4">
            <p className="font-poppins text-sm font-medium text-white underline underline-offset-4 decoration-2 decoration-[#00B207]">
              01622543390
            </p>
            <p className="font-poppins text-base font-normal text-[#808080]">
              or
            </p>
            <p className="font-poppins text-sm font-medium text-white underline underline-offset-4 decoration-2 decoration-[#00B207]">
              mshipan657@gmail.com
            </p>
          </div>
        </div>
        {/* Footer Links */}
        <div className="w-full">
          <FooterLinks />
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="container py-6 border-t border-t-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
          <p className="font-poppins font-normal text-sm text-[#808080] text-center md:text-left">
            FreshCart eCommerce © {currentYear}. All Rights Reserved by{" "}
            <span className="text-[#00B207]">
              <Link href="https://shipan-mallik.web.app/">Shipan Mallik.</Link>
            </span>
          </p>

          <div className="flex flex-row items-center gap-2">
            <Image src={applePay} alt="apple pay" width={45} height={31} />
            <Image src={visa} alt="visa" width={45} height={31} />
            <Image src={discover} alt="discover" width={45} height={31} />
            <Image src={mastercard} alt="mastercard" width={45} height={31} />
            <Image src={securePay} alt="secure pay" width={65} height={31} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

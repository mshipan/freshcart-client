import Image from "next/image";
import mapPin from "../../../public/images/icons/mapPin.png";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="py-3 border-b border-b-gray-300">
      <div className="container flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={mapPin} width={15} height={16} alt="map pin" />
          <p className="font-poppins text-xs text-gray-600">
            Store Location: Shah Ali Plaza, Mirpur- 10, Dhaka - 1216,
            Bangladesh.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 font-poppins text-xs text-gray-600">
            <Link href="/sing-in">Sign In</Link>
            <p>/</p>
            <Link href="/sing-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

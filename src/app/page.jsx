import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";

export const metadata = {
  title: "Homepage | FreshCart",
  description: "FreshCart is An Ecommerce Grocery Website",
};

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
    </div>
  );
};

export default HomePage;

import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import PopularCategory from "@/components/home/popularCategory/PopularCategory";

export const metadata = {
  title: "Homepage | FreshCart",
  description: "FreshCart is An Ecommerce Grocery Website",
};

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <PopularCategory />
    </div>
  );
};

export default HomePage;

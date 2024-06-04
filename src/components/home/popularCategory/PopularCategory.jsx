import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import beautyHealth from "/public/images/beautyHealth.png";
import bakingNeeds from "/public/images/bakingNeeds.png";
import beverages from "/public/images/beverages.png";
import breadBakery from "/public/images/breadBakery.png";
import cooking from "/public/images/cooking.png";
import diabeticFood from "/public/images/diabeticFood.png";
import dishDetergents from "/public/images/dishDetergents.png";
import freshFruit from "/public/images/freshFruit.png";
import freshVegetables from "/public/images/freshVegetables.png";
import meatFish from "/public/images/meatFish.png";
import oil from "/public/images/oil.png";
import snacks from "/public/images/snacks.png";
import Image from "next/image";
const PopularCategory = () => {
  return (
    <div className="container">
      <div className="py-12 w-full">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="font-poppins font-semibold text-xl md:text-3xl text-[#1A1A1A]">
            Popular Categories
          </h1>
          <div className="text-[#00B207] flex flex-row items-center gap-3">
            <p className="font-poppins font-medium text-base">View All</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 content-center justify-items-center gap-6">
          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={freshFruit}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Fresh Fruit
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={freshVegetables}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Fresh Vegetables
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={meatFish}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Meat & Fish
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={snacks}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Snacks
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={beverages}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Beverages
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={beautyHealth}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Beauty & Health
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={breadBakery}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Bread & Bakery
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={bakingNeeds}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Baking Needs
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={cooking}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Cooking
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={diabeticFood}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Diabetic Food
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image
                src={dishDetergents}
                width={190}
                height={130}
                alt="Category Image"
              />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Dish Detergents
              </p>
            </div>
          </div>

          <div className="group md:w-[200px] md:h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 border group-hover:border-[#2C742F] rounded-lg transition-all duration-300 ease-in-out">
              <Image src={oil} width={190} height={130} alt="Category Image" />
              <p className="font-poppins font-medium text-lg text[#1A1A1A] group-hover:text-[#2C742F] text-center">
                Oil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;

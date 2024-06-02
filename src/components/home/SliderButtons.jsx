"use client";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Button from "../shared/Button";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3 absolute bottom-2 right-2 z-30">
      <Button
        icon={BsArrowLeft}
        className="bg-[#00B207] rounded-full"
        iconClassName="text-white text-lg"
        onClick={() => swiper.slidePrev()}
      />
      <Button
        icon={BsArrowRight}
        className="bg-[#00B207] rounded-full"
        iconClassName="text-white text-lg"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default SliderButtons;

import { useState } from "react";
import Arrow from "./Arrow";

type SliderProps = {
  className?: string;
  images: string[];
};

export const Slider: React.FC<SliderProps> = ({ className, images }) => {
  const [translateCount, setTranslateCount] = useState(2);
  const transformStyle = {
    transform: `translateX(calc(-${105 * translateCount}%))`,
  }

  const handleLeftArrowClick = () => {
    if (translateCount > 0) {
      setTranslateCount(translateCount - 1);
    }
  }

  const handleRightArrowClick = () => {
    if (translateCount < images.length - 1) {
      setTranslateCount(translateCount + 1);
    }
  }

  return (
    <div className={className}>
      <div className="flex gap-4 overflow-hidden">
        <div className="z-10 w-[10%] flex-shrink-0"></div>
        <div className="flex gap-[5%]" style={transformStyle}>
          {images.map((image, index) => (
            <img key={index} src={image} alt="" className="rounded-xl" />
          ))}
        </div>
        <div className="z-10 w-[10%] flex-shrink-0"></div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Arrow direction="left" onClick={handleLeftArrowClick} />
        <Arrow direction="right" onClick={handleRightArrowClick} />
      </div>
    </div>
  );
};
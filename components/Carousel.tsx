import Arrow from "./Arrow";
import { Slider } from "./Slider";
import { Title2 } from "./Title2";

type CarouselProps = {
  className?: string;
  images: string[];
};

export const Carousel: React.FC<CarouselProps> = ({ className, images }) => {
  return (
    <div className={className}>
      <Title2 className="text-center">My Work</Title2>
      <Slider images={images} className='mt-8 md:mt-14' />
    </div>
  );
};
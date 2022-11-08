import { Button } from "./Button";
import { Text } from "./Text";
import { Title2 } from "./Title2";

interface PresentationCardProps {
  className?: string;
  image?: string;
  title: string;
  body: string;
};

export const PresentationCard: React.FC<PresentationCardProps> = ({ className, image, title, body }) => {
  return (
    <div className={`grid text-center md:text-left md:grid-cols-2 justify-items-center md:justify-items-start md:items-center ${className}`}>
      {image && <img src={image} alt="" className="w-full max-w-[364px] md:-translate-x-20 lg:translate-x-0 xl:max-w-[445px]" />}
      <div className={`flex flex-col items-center md:items-start`}>
        <Title2 className={image ? "mt-10 md:mt-0" : ""}>{title}</Title2>
        <Text className="mt-6 xl:mt-8">{body}</Text>
        <Button intent="secondary" className="mt-6 xl:mt-8" />
      </div>
    </div>
  );
};
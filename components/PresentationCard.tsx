import { Button } from "./Button";
import { PresentationImage } from "./PresentationImage";
import { Text } from "./Text";
import { Title2 } from "./Title2";

type PresentationCardProps = {
  className?: string;
  image: string;
  title: string;
  body: string;
};

export const PresentationCard: React.FC<PresentationCardProps> = ({ className, image, title, body }) => {
  return (
    <div className={`grid ${className}`}>
      <PresentationImage image={image} />
      <Title2 className="mt-10">{title}</Title2>
      <Text className="mt-6">{body}</Text>
      <Button intent="secondary" className="mt-6 justify-self-center"/>
    </div>
  );
};
import { Button } from "./Button";
import { Text } from "./Text";
import { Title2 } from "./Title2";

interface CTACardProps {
  className?: string;
  title: string;
  body: string;
};

export const CTACard: React.FC<CTACardProps> = ({ className, title, body }) => {
  return (
    <div className={`justify-items-center bg-black px-6 rounded-xl py-12 text-center md:px-[75px] grid xl:grid-cols-2 xl:text-left xl:pl-16 xl:pr-20 ${className}`}>
      <Title2 theme="dark" className="xl:col-span-2 xl:justify-self-start xl:row-start-1 xl:col-start-1">{title}</Title2>
      <Text className="mt-6" theme="dark">{body}</Text>
      <Button intent="secondary" className="mt-6 xl:row-span-2 xl:self-center xl:mt-0 xl:row-start-1 xl:col-start-2 xl:justify-self-end" />
    </div>
  );
};
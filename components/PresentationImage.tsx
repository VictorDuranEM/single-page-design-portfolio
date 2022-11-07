type PresentationImageProps = {
  className?: string;
  image: string;
};

export const PresentationImage: React.FC<PresentationImageProps> = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt="" />
    </div>
  );
};
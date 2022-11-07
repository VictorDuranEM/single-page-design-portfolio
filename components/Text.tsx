type TextProps = {
  className?: string;
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <p className="font-medium text-mediumBrown text-center leading-7">{children}</p> 
    </div>
  );
};
type Title2Props = {
  className?: string;
  children: React.ReactNode;
};

export const Title2: React.FC<Title2Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <h1 className="text-[1.625rem] font-bold text-dark text-center">{children}</h1>
    </div>
  );
};
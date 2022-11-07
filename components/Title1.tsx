type Title1Props = {
  className?: string;
  children: React.ReactNode;
};

export const Title1: React.FC<Title1Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold text-dark text-center">{children}</h1>
    </div>
  );
};
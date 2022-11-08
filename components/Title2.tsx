type Title2Props = {
  className?: string;
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const Title2: React.FC<Title2Props> = ({ className, children, theme }) => {
  return (
    <div className={className}>
      <h1 className={`text-[1.625rem] leading-tight font-bold md:text-[2rem] xl:text-[2.5rem] ${theme === "dark" ? "text-lightCream" : "text-black"}`}>{children}</h1>
    </div>
  );
};
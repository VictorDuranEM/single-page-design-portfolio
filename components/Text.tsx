type TextProps = {
  className?: string;
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const Text: React.FC<TextProps> = ({ className, children, theme }) => {
  return (
    <div className={className}>
      <p className={`font-medium leading-7 md:text-lg xl:max-w-[730px] xl:mx-auto ${theme === "dark" ? "text-lightCream" : "text-mediumBrown"}`}>{children}</p>
    </div>
  );
};
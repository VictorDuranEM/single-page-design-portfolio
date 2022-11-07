type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
          <img src="/logo.svg" alt="" />
    </div>
  );
};
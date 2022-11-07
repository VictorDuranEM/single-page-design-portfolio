type ArrowProps = {
  className?: string;
  direction: "left" | "right";
  onClick?: () => void;
};

function Arrow({ className, direction, onClick }: ArrowProps) {
  const arrowSvg = direction === "left" ? "/icon-arrow-left.svg" : "/icon-arrow-right.svg";
  return (
    <button onClick={onClick} className={`bg-black inline-block p-6 rounded-full hover:bg-galacticBlue ${className}`}>
      <img src={arrowSvg} alt="Arrow" />
    </button>
  );
}

export default Arrow;
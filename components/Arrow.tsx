type ArrowProps = {
  className?: string;
  direction: "left" | "right";
};

function Arrow({ className, direction }: ArrowProps) {
  const arrowSvg = direction === "left" ? "/icon-arrow-left.svg" : "/icon-arrow-right.svg";
  return (
    <a href="#" className={`bg-dark inline-block p-6 rounded-full hover:bg-purple ${className}`}>
      <img src={arrowSvg} alt="Arrow" />
    </a>
  );
}

export default Arrow;
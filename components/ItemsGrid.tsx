export type Item = {
  title: string;
  image: string;
}

type ItemsGridProps = {
  className?: string;
  items: [Item, Item, Item, Item, Item, Item];
};

export const ItemsGrid: React.FC<ItemsGridProps> = ({ className, items }) => {
  return (
    <div className={className}>
      <div className="grid gap-6">
        <div className="p-6 flex flex-col justify-between bg-galacticBlue rounded-lg h-[364px]">
          <img src={items[0].image} alt="" className="w-[128px] self-end" />
          <p className="text-white font-bold text-2xl">{items[0].title}</p>
        </div>
        <div className="grid gap-6 grid-cols-2">
          <div className="p-6 flex flex-col justify-between bg-summerYellow rounded-lg h-[182px]">
            <img src={items[1].image} alt="" className="w-[64px] self-end" />
            <p className="text-white font-bold text-2xl">{items[1].title}</p>
          </div>
          <div className="p-6 flex flex-col justify-between bg-pink rounded-lg h-[182px]">
            <img src={items[2].image} alt="" className="w-[64px] self-end" />
            <p className="text-white font-bold text-2xl">{items[2].title}</p>
          </div>
          <div className="p-6 flex flex-col justify-between bg-lightRed rounded-lg col-span-2 h-[158px]">
            <img src={items[3].image} alt="" className="w-[128px] self-end" />
            <p className="text-white font-bold text-2xl">{items[3].title}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-6 flex flex-col justify-between bg-cyan rounded-lg h-[182px]">
            <img src={items[4].image} alt="" className="w-[160px] self-end" />
            <p className="text-white font-bold text-2xl">{items[4].title}</p>
          </div>
          <div className="p-6 flex flex-col justify-between bg-darkPurple rounded-lg h-[182px]">
            <img src={items[5].image} alt="" className="w-[128px] self-end" />
            <p className="text-white font-bold text-2xl">{items[5].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
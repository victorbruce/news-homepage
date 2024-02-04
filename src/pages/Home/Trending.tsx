import { News } from "./Hero";

interface Trend extends News {
  position: string;
  image: string;
}

const trends: Trend[] = [
  {
    id: 1,
    position: "01",
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    image: "/images/image-retro-pcs.jpg",
  },
  {
    id: 2,
    position: "02",
    title: " Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets.",
    image: "/images/image-top-laptops.jpg",
  },
  {
    id: 3,
    position: "03",
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
    image: "/images/image-gaming-growth.jpg",
  },
];

const Trending = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row gap-6">
        {trends.map((trend) => (
          <div key={trend.id} className="flex gap-4">
            <div className="h-[120px] overflow-hidden border">
              <img
                className="w-full h-full object-cover"
                src={trend.image}
                alt={trend.title}
              />
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <p className="text-3xl font-bold text-grayishBlue">
                {trend.position}
              </p>
              <h3 className="text-lg font-bold text-veryDarkBlue transition-colors duration-500 hover:text-softRed hover:cursor-pointer">
                {trend.title}
              </h3>
              <p className="text-sm text-darkGrayishBlue">{trend.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;

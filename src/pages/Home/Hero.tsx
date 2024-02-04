import Aside from "./Aside";
import Header from "./Header";

export interface News {
  id: number;
  title: string;
  content: string;
}

const asideNews: News[] = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
      <Header />
      <Aside asideNews={asideNews} />
    </div>
  );
};

export default Hero;

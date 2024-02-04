import { News } from "./Hero";

interface Props {
  asideNews: News[];
}

const Aside = ({ asideNews }: Props) => {
  return (
    <aside className="bg-veryDarkBlue text-offWhite px-6 py-4 flex flex-col justify-center col-span-1">
      <h2 className="text-softOrange text-4xl font-bold mb-4">New</h2>
      <ul>
        {asideNews.map((news) => (
          <li
            key={news.id}
            className="flex flex-col gap-4 py-6 border-b border-b-darkGrayishBlue last-of-type:border-b-0"
          >
            <h3 className="font-[500] text-xl hover:text-softOrange transition-colors duration-500 hover:cursor-pointer">
              {news.title}
            </h3>
            <p className="text-[15px] text-darkGrayishBlue">{news.content}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;

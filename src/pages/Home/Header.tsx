import ImageWeb3Desktop from "/images/image-web-3-desktop.jpg";
import ImageWeb3Mobile from "/images/image-web-3-mobile.jpg";

const Header = () => {
  return (
    <header className="col-span-3 lg:col-span-2">
      <div className="w-full mb-8">
        <img
          className="w-full h-full"
          srcSet={`${ImageWeb3Mobile} 686w, ${ImageWeb3Desktop} 1460w`}
          sizes="(max-width: 600px) 100vw, (max-width: 1440px) 900px"
          src={ImageWeb3Mobile}
          alt="hero banner"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <h1 className="col-span-2 text-veryDarkBlue text-5xl lg:text-6xl font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="col-span-2 lg:px-4 flex flex-col justify-between">
          <p className="text-darkGrayishBlue mb-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-[200px] max-w-full transition-colors duration-500 bg-softRed hover:bg-veryDarkBlue text-offWhite px-8 py-4 tracking-[2px] font-[500] text-sm uppercase">
            Read More
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;

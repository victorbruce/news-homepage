import Logo from "/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <img src={Logo} alt="app icon" />
        <ul className="flex gap-8 text-darkGrayishBlue">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Category</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

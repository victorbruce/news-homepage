import { useState } from "react";
import Logo from "/images/logo.svg";
import styles from "./Navbar.module.css";
import IconMenu from "/images/icon-menu.svg";
import IconMenuClose from "/images/icon-menu-close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className={styles.navbar + " container"}>
        <img src={Logo} alt="app icon" />

        {/** Desktop View */}
        <ul className={styles.menu}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>

        {/** Mobile Menu Icon */}
        <button onClick={() => setMenu(true)}>
          <img src={IconMenu} alt="open menu" />
        </button>
      </div>

      {/** Mobile View */}
      {menu && (
        <ul className={styles.mobileMenu}>
          <div className={styles.mobileMenuBg} onClick={() => setMenu(false)} />
          <div className={styles.mobileMenuContainer}>
            <div className={styles.mobileMenuHeader}>
              <button onClick={() => setMenu(false)}>
                <img src={IconMenuClose} width={24} alt="close menu" />
              </button>
            </div>
            <ul className={styles.mobileMenuList}>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

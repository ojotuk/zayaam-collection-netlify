import React, { useState, useRef } from "react";
import Link from "next/Link";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faBars,
  faShoppingBag,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ active }) => {
  const [open, setOpen] = useState(false);
  const navToggle = useRef(null);

  const toggler = () => {
    navToggle.current.classList.toggle(styles.toggle_open);
    // console.log("clicked");
  };

  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_bar_container}>
        <Link href="/">
          <a className={styles.brand}>
            <img src="/logo.png" />
            <div>
              <span>Zayaam</span>
              <span>Collections</span>
            </div>
          </a>
        </Link>
        <div className={styles.nav_links} ref={navToggle}>
          <ul>
            <li className={styles.nav_item} id="active">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/#featured">
                <a>Featured</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav_right}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.i}
            onClick={toggler}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

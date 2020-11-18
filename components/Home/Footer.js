import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  let date = new Date();
  let copyright = () => `${date.getFullYear()} zayaamcollections.com`;
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.getInTouch}>
            <h3>Get in Touch</h3>
            <p>
              Any questions? visit us at Lagos State Abattoir Complex, Oko-Oba,
              Agege or call us on (+234) 8020603730
            </p>
            <ul>
              <li>
                <Link href="https://www.facebook.com/zayaam01/">
                  <a>
                    <i className="fa fa-facebook"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/zayaamcollection/?hl=en">
                  <a>
                    <i className="fa fa-instagram"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <i className="fa fa-pinterest"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/+2348020603730">
                  <a>
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categories}>
            <h3>categories</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Men</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Women</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Kiddies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Footwears</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Ankara</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Laces</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Links</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mail}>
            <h3>News Letter</h3>
            <input
              placeholder="email@example.com"
              type="email"
              autoComplete="off"
            />
            <button>Subscribe</button>
          </div>
        </div>
        <hr></hr>
        <div className={styles.copyright}>
          &copy; {copyright()}
          <div className={styles.power}>
            Powered by{" "}
            <Link href="https://www.cloud10hub.com">
              <a rel="noreferer" target="_blank">
                Cloud10 Tech Hub
              </a>
            </Link>
          </div>
        </div>

        <a href="#target" rel="noreferer" id="go-up" className={styles.goUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </section>
  );
};

export default Footer;

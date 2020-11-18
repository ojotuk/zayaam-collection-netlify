import Link from "next/Link";
import React from "react";
import styles from "../../styles/Home.module.css";

const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <img src="/xbanner.webp" alt="benner" /> */}
          <img src="/dress_2.png" />
          <div className={styles.description}>
            <h4>Let's take care of your look</h4>
            <h1>LookBook</h1>
            <Link href="/">
              <a>View collections</a>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/looks_1.png" />
          <div className={styles.description}>
            <h4>your child favourite</h4>
            <h1>Kiddies Shop</h1>
            <Link href="/">
              <a>View collections</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;

import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const ProductSample = () => {
  return (
    <section className={styles.productSample}>
      <div className={styles.container}>
        <div className={styles.productCategorySample}>
          <div className={styles.sample}>
            <img src="/products_banner_dresses.webp" />
            <div className={styles.link}>
              <Link href="/">
                <a>
                  <span className={styles.caption}>dresses</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.sample}>
            <img src="/products_banner_sunglasses.webp" />
            <div className={styles.link}>
              {" "}
              <Link href="/">
                <a>
                  <span className={styles.caption}>sunglasses</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.productCategorySample}>
          <div className={styles.sample}>
            <img src="/products_banner_watches.webp" />
            <div className={styles.link}>
              <Link href="/">
                <a>
                  <span className={styles.caption}>watches</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.sample}>
            <img src="/products_banner_footwears.webp" />
            <div className={styles.link}>
              <Link href="/">
                <a>
                  <span className={styles.caption}>footwears</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.productCategorySample}>
          <div className={styles.sample}>
            <img src="/products_banner_bags.webp" />
            <div className={styles.link}>
              <Link href="/">
                <a>
                  <span className={styles.caption}>Bags</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.sample}>
            <div className={styles.signUp}>
              <h3>Sign up and get 20% off</h3>
              <p>
                Be the frist to know about the latest fashion news and get
                exclu-sive offers
              </p>
              <Link href="/">
                <a className={styles.signUpBtn}>
                  <span>Sign Up</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSample;

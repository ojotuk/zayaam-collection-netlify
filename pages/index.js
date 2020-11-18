import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Promotion from "../components/Home/Promotion";
import styles from "../styles/Home.module.css";
import ProductSample from "../components/Home/ProductSample";
export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Zayaam Collections</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main} id="target">
        <Hero />
        <ProductSample />
        <div className={styles.featuredProducts}>
          <h3>Featured Products</h3>
          <FeaturedProduct />
        </div>
        <Promotion />
        <Footer />
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {

//   return {
//     props: { isConnected },
//   };
// }

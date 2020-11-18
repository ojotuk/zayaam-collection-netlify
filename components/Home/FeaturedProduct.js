import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/ProductSlide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faGrinHearts,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header.js";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    //slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const productSlide = [
  {
    url: "/featured_products_4.webp",
    tag: "Product name jump suit",
    link: "/",
    price: "1000",
    id: 1,
  },
  {
    url: "/featured_products_3.webp",
    tag: "Product name",
    link: "/",
    price: "1000",
    id: 2,
  },
  {
    url: "/featured_products_2.webp",
    tag: "Product name",
    link: "/",
    price: "1000",
    id: 3,
  },
  {
    url: "/featured_products_2.webp",
    tag: "Product name",
    link: "/",
    price: "1000",
    id: 4,
  },
  // {
  //   url:
  //     "https://cdn.shopify.com/s/files/1/0072/2609/7731/products/product-image-695189361_1024x1024@2x.jpg?v=1568017092",
  //   tag: "Product name",
  //   link: "/",
  //   price: "1000",
  //   id: 4,
  // },
  // {
  //   url:
  //     "https://i.pinimg.com/474x/cd/63/8e/cd638eeb9d5c7a004f2a35519fcf2963.jpg",
  //   tag: "Chronograph Leather Watch",
  //   link: "/",
  //   price: "1000",
  //   id: 5,
  // },
  // {
  //   url:
  //     "https://i.pinimg.com/474x/61/ba/e5/61bae5bae2cf6e7aaf64eac867533db1.jpg",
  //   tag: "Ulysse Nardin Diver Chronograph 44mm - Farfetch",
  //   link: "/",
  //   price: "1000",
  //   id: 6,
  // },
];

const FeaturedProduct = (props) => {
  return (
    <section className={styles.featured}>
      {/* <div className={styles.container}> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // afterChange={(num, state) => console.log("changed")}
      >
        {productSlide.map((slide) => (
          <div className={styles.productSlide} key={slide.id}>
            <div className={styles.productImage}>
              <img src={slide.url} />
              <div className={styles.order}>
                <Link href={slide.link}>
                  <a>Order Now</a>
                </Link>
                <i className="fa fa-heart-o">
                  {/* <FontAwesomeIcon size="3x" icon={} /> */}
                </i>
              </div>
            </div>
            <span>
              <Link href={slide.link}>
                <a>{slide.tag}</a>
              </Link>
            </span>
            <p>
              {" "}
              <span>
                <s>$2000</s>
              </span>{" "}
              $ {slide.price}
            </p>
          </div>
        ))}
      </Carousel>
      {/* </div> */}
    </section>
  );
};

export default FeaturedProduct;

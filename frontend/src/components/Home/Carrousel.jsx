import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../slices/productsSlice";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ClampLines from "react-clamp-lines";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../../css/carouselStyles.css";

const Carrousel = () => {
  const products = useSelector(selectors.selectAll);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomProducts = (products) => {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      const sliced = shuffledProducts.slice(0, 3);

      setRandomProducts(sliced);
    };

    getRandomProducts(products);
  }, [products]);

  return (
    <Carousel
      className="carousel"
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={5000}
    >
      {!randomProducts.length
        ? Array.from({ length: 3 }).map((_, index) => (
            <SkeletonTheme
              key={index}
              baseColor="#ebebeb"
              highlightColor="#f5f5f5"
            >
              <div style={{ display: "flex", padding: "8px 80px 16px 80px" }}>
                <div className="w-1/2 p-4 relative">
                  <h2 className="pb-8">
                    <Skeleton />
                  </h2>
                  <p className="pb-20">
                    <Skeleton count={4} />
                  </p>
                  <div className="absolute bottom-6">
                    <Skeleton height="46px" width="104px" />
                  </div>
                </div>

                <div className="w-1/2 p-4">
                  <Skeleton height="320px" containerClassName="card-image" />
                </div>
                <Skeleton containerClassName="flex-1" />
              </div>
            </SkeletonTheme>
          ))
        : randomProducts.map((product) => (
            <div key={product.id} className="content">
              <div className="w-1/2 p-4 flex flex-col items-start">
                <h2 className="font-poiret">{product.title}</h2>
                <ClampLines
                  text={product.description}
                  id="really-unique-id"
                  lines={3}
                  ellipsis="..."
                  moreText=""
                  lessText="Show less"
                  className="description font-opensans"
                />
                <Link
                  className="button-info button rounded font-opensans text-white bg-customblue hover:bg-gray-400"
                  to={`/product/${product.id}`}
                >
                  More info
                </Link>
              </div>
              <div className="flex justify-center w-1/2 p-4">
                <img
                  className="w-full max-h-80 object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
          ))}
    </Carousel>
  );
};

export default Carrousel;

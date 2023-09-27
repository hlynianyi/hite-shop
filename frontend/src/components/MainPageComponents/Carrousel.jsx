import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../slices/productsSlice";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ClampLines from "react-clamp-lines";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/carouselStyles.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// todo: устранить прыгающую страницу при загрузке контента

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
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={500000}
    >
      {!randomProducts.length
        ? Array.from({ length: 1 }).map((_, index) => (
            <div key={index} className="px-20 pt-8 flex w-full">
              {/* здесь может быть любая структура для скелетона, которая похожа на твои карточки продукта */}
              <Skeleton  height={383} />
            </div>
          ))
        : randomProducts.map((product) => (
            <div key={product.id} className="px-20 pt-8 flex w-full">
              {/* ... оставшийся код для отображения продуктов */}
              <div className="w-1/2 p-4 flex flex-col items-start">
                <h2 className="pb-8 font-poiret text-4xl">{product.title}</h2>
                <ClampLines
                  text={product.description}
                  id="really-unique-id"
                  lines={2}
                  ellipsis="..."
                  moreText=""
                  lessText="Show less"
                  className="pb-16 font-opensans text-xl"
                />
                <Link
                  className="absolute bottom-8 button rounded font-opensans text-white text-lg bg-customblue hover:bg-gray-400 h-11 py-2 px-10 leading-11"
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

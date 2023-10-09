import React, { useState } from "react";
import ClampLines from "react-clamp-lines";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions, selectors } from "../../slices/productsSlice";
import { ReactComponent as Cards } from "../../assets/productsDisplayType1.svg";
import { ReactComponent as List } from "../../assets/productsDisplayType2.svg";
import { ReactComponent as ChevronSideIcon } from "../../assets/chevronSideIcon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/chevronDownIcon.svg";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const allProducts = useSelector(selectors.selectFilteredProducts);

  const [displayType, setDisplayType] = useState("cards");

  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState("By popularity");

  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => {
        switch (selectedCategory) {
          case "Electronics": {
            return p.category === selectedCategory.toLowerCase();
          }
          case "Jewerly": {
            return p.category === "jewelery";
          }
          default: {
            return (
              p.category === "men's clothing" ||
              p.category === "women's clothing"
            );
          }
        }
      })
    : allProducts;

  const toggleDisplayType = (type) => {
    setDisplayType(type);
  };

  const toggleTypeFilter = () => {
    setIsTypeFilterOpen(!isTypeFilterOpen);
  };

  const handleFilterChange = (event) => {
    toggleTypeFilter();
    switch (event) {
      case "popularity": {
        setCurrentSort("By popularity");
        dispatch(actions.sortFilteredProducts("popularity"));
        break;
      }
      case "rating": {
        setCurrentSort("By rating");
        dispatch(actions.sortFilteredProducts("rating"));
        break;
      }
      default:
        console.log("Error! Unknown event in handleFilterChange");
        break;
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-between pb-16">
        <div className="flex flex-col justify-end">
          <div className="relative">
            <button
              className="font-poiret w-250 text-lg text-start px-2 bg-customemail hover:bg-gray-300 rounded flex justify-between items-center"
              onClick={toggleTypeFilter}
            >
              {currentSort}
              <div className="flex items-center">
                {isTypeFilterOpen ? (
                  <ChevronDownIcon className="h-5 w-5 ml-1 " />
                ) : (
                  <ChevronSideIcon className="h-5 w-5 ml-1 " />
                )}
              </div>
            </button>
            {isTypeFilterOpen && (
              <div className="absolute left-0 w-250 bg-white  mt-2 text-opensans text-lg z-10 border border-gray-200 rounded shadow">
                <div className="w-250 hover:bg-gray-300 text-opensans text-lg text-customblue border-b">
                  <button onClick={() => handleFilterChange("popularity")}>
                    <p className="font-poiret text-2xs pl-4">By popularity</p>
                  </button>
                </div>
                <div className="w-250 hover:bg-gray-300 text-opensans text-lg text-customblue">
                  <button onClick={() => handleFilterChange("rating")}>
                    <p className="font-poiret text-2xs pl-4">By rating</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="display-variant">
          <button className="" onClick={() => toggleDisplayType("cards")}>
            <Cards
              className={
                displayType === "cards" ? "active-icon" : "inactive-icon"
              }
            />
          </button>
          <button className="" onClick={() => toggleDisplayType("list")}>
            <List
              className={
                displayType === "list" ? "active-icon" : "inactive-icon"
              }
            />
          </button>
        </div>
      </div>
      <div className="product-container -m-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={
              displayType === "cards" ? "product-card" : "product-list"
            }
          >
            <Link to={`/product/${product.id}`}>
              <div className="item">
                <div className="flex justify-center pt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="p-0 object-center w-52 h-56"
                  />
                </div>
                <div className="item-text p-4">
                  <div className="h-16">
                    <ClampLines
                      text={product.title}
                      id="really-unique-id"
                      lines={2}
                      ellipsis="..."
                      moreText=""
                      lessText="Show less"
                      className="title font-opensans"
                    />
                  </div>
                  <p className="description">{product.description}</p>
                  <p className="price text-opensans text-customblue">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;

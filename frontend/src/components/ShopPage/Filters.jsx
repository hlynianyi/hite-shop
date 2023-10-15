import React, { useState } from "react";
import { ReactComponent as ChevronSideIcon } from "../../assets/chevronSideIcon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/chevronDownIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/line.svg";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/productsSlice";

const Filters = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [filter, setFilter] = useState({
    price: { min: null, max: null },
    category: null,
  });

  const handleCategoryFilterChange = (categoryName) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: categoryName,
    }));
    dispatch(
      actions.setFilter({
        ...filter,
        category: categoryName,
      })
    );
  };

  const handleFilterChange = (event) => {
    const name = event.target.name;
    const value = event.target.value ? Number(event.target.value) : null;

    if (name === "min") setMinPrice(value);
    if (name === "max") setMaxPrice(value);

    setFilter((prevFilter) => ({
      ...prevFilter,
      price: {
        ...prevFilter.price,
        [name]: value,
      },
    }));
  };

  const applyFilter = () => {
    dispatch(actions.setFilter(filter));
  };

  const resetPriceFilter = () => {
    setMinPrice(0);
    setMaxPrice(0);

    setFilter((prevFilter) => ({
      ...prevFilter,
      price: { min: null, max: null },
    }));
    dispatch(
      actions.setFilter({
        ...filter,
        price: { min: null, max: null },
      })
    );
  };

  const togglePriceFilter = () => {
    setIsPriceFilterOpen(!isPriceFilterOpen);
  };

  const toggleCategoryFilter = () => {
    setIsCategoryFilterOpen(!isCategoryFilterOpen);
  };

  const [showFilterOverlay, setShowFilterOverlay] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowFilterOverlay(true);
          setIsPriceFilterOpen(true);
          setIsCategoryFilterOpen(true);
        }}
        className="filters-button bg-customblue hover:bg-blue-300 text-white rounded font-poiret"
      >
        FILTERS
      </button>
      <div
        className={`${
          showFilterOverlay ? "filter-overlay" : "filters-container"
        }`}
      >
          <p className="text-32 font-poiret leading-42">Filters</p>
          <div className="flex flex-col w-full pt-12">
            <div className="flex justify-between">
              <div className="flex w-full">
                <button
                  className="flex justify-start w-full font-poiret text-xl leading-9 bg-transparent focus:outline-none"
                  onClick={togglePriceFilter}
                >
                  Price
                </button>
              </div>
              <div className="flex items-center">
                {isPriceFilterOpen ? (
                  <ChevronDownIcon
                    onClick={togglePriceFilter}
                    className="h-5 w-5"
                  />
                ) : (
                  <ChevronSideIcon
                    onClick={togglePriceFilter}
                    className="h-5 w-5"
                  />
                )}
              </div>
            </div>
            <LineIcon className="w-full" />
            {isPriceFilterOpen && (
              <div className="bg-white mt-6  text-opensans text-lg w-full">
                <div className="flex justify-between">
                  <div className="flex w-full flex-col space-y-2">
                    <input
                      onChange={handleFilterChange}
                      value={minPrice}
                      name="min"
                      type="number"
                      placeholder="From"
                      min={0}
                      className="h-8 rounded border border-blue-200 text-productprice text-2xs px-2"
                    />
                    <input
                      onChange={handleFilterChange}
                      value={maxPrice}
                      name="max"
                      type="number"
                      placeholder="To"
                      min={0}
                      className="h-8 rounded border border-blue-200 text-productprice text-2xs px-2"
                    />
                    <button
                      onClick={resetPriceFilter}
                      className="h-8 bg-customblue hover:bg-blue-300 text-white text-lg px-2 py-1 rounded font-poiret"
                    >
                      RESET
                    </button>
                    <button
                      onClick={applyFilter}
                      className="h-8 bg-customblue hover:bg-blue-300 text-white text-lg px-2 py-1 rounded font-poiret"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col pt-8 w-full">
            <div className="flex justify-between">
              <div className="flex w-full">
                <button
                  className="flex justify-start w-full font-poiret text-xl leading-9 bg-transparent focus:outline-none"
                  onClick={toggleCategoryFilter}
                >
                  Category
                </button>
              </div>
              <div className="flex items-center">
                {isCategoryFilterOpen ? (
                  <ChevronDownIcon
                    onClick={toggleCategoryFilter}
                    className="h-5 w-5"
                  />
                ) : (
                  <ChevronSideIcon
                    onClick={toggleCategoryFilter}
                    className="h-5 w-5"
                  />
                )}
              </div>
            </div>
            <LineIcon className="w-full" />
            {isCategoryFilterOpen && (
              <div className="flex flex-col items-start bg-white mt-4 ml-4 w-full text-opensans text-lg">
                <button
                  onClick={() => handleCategoryFilterChange(null)}
                  className="pb-1 text-customblue hover:text-black text-2xs font-light text-opensans"
                >
                  ALL
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryFilterChange(category.name)}
                    className="pb-1 text-customblue hover:text-black text-2xs font-light text-opensans whitespace-normal text-left"
                  >
                    {category.name.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
            <div className="filters-button-close">
              <button
                onClick={() => setShowFilterOverlay(false)}
                className="w-full h-8 bg-customblue hover:bg-blue-300 text-white text-lg px-2 py-1 rounded font-poiret"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Filters;

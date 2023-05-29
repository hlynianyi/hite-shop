import React, { useState } from "react";
import { ReactComponent as ChevronSideIcon } from "../../assets/chevronSideIcon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/chevronDownIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/line.svg";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/productsSlice";

// todo: сделать кликабельной всю зону кнопок фильтров

const Filters = (props) => {
  const { categories } = props;
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const dispatch = useDispatch();

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

  return (
    <div className="pr-8 flex flex-col w-1/5 pt-10">
      <p className="text-32 font-poiret leading-42">Filters</p>
      <div className="flex flex-col w-full pt-24">
        <div className="flex justify-between">
          <div className="flex">
            <button
              className="font-poiret text-xl leading-9 bg-transparent focus:outline-none"
              onClick={togglePriceFilter}
            >
              Price
            </button>
          </div>
          <div className="flex items-center">
            {isPriceFilterOpen ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronSideIcon className="h-5 w-5" />
            )}
          </div>
        </div>
        <LineIcon className="w-full" />
        {isPriceFilterOpen && (
          <div className="bg-white mt-6  text-opensans text-lg w-full">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2 w-full">
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
          <div className="flex">
            <button
              className="font-poiret text-xl leading-9 bg-transparent focus:outline-none"
              onClick={toggleCategoryFilter}
            >
              Category
            </button>
          </div>
          <div className="flex items-center">
            {isCategoryFilterOpen ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronSideIcon className="h-5 w-5" />
            )}
          </div>
        </div>
        <LineIcon className="w-full" />
        {isCategoryFilterOpen && (
          <div className="flex flex-col items-start bg-white mt-4 ml-4 w-80 text-opensans text-lg">
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
                className="pb-1 text-customblue hover:text-black text-2xs font-light text-opensans"
              >
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;

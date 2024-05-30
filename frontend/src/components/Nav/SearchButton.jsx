import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../slices/productsSlice";
import { ReactComponent as SearchIcon } from "../../assets/navbarFind.svg";
import { Link } from "react-router-dom";

const SearchButton = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const products = useSelector(selectors.selectAll);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterByTitle = (char) => {
    const containsChar = products.filter((item) => {
      return item.title.toUpperCase().includes(char.toUpperCase());
    });
    setFilteredProducts(containsChar);
  };

  const handleSearchClick = () => setSearchClicked(!searchClicked);
  const handleInput = (event) => filterByTitle(event.target.value);

  const filteredList = useMemo(() => {
    return filteredProducts.map((product) => (
      <li className="" key={product.id}>
        <div className="flex flex-row justify-start items-center">
          <div className="shrink-0">
            <SearchIcon className="h-6 w-6" />
          </div>
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.title}
          </Link>
        </div>
      </li>
    ));
  }, [filteredProducts]);

  return (
    <div className="flex flex-row space-x-1">
      <div className={`search-input-wrapper ${searchClicked ? "show" : ""}`}>
        {searchClicked && (
          <div className="flex flex-col">
            <input
              className="pl-4 border-[1px] border-customblue border-customblue rounded-xl font-poiret"
              onInput={handleInput}
              type="text"
              name="search"
              placeholder="I am looking for.."
            />
            <div className="search-list font-poiret">
              {filteredProducts.length > 0 && <ul>{filteredList}</ul>}
            </div>
          </div>
        )}
      </div>
      <button className="button" onClick={handleSearchClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchButton;

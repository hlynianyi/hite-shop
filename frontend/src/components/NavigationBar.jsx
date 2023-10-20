import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Search } from "./Search";
import { ReactComponent as SearchIcon } from "../assets/navbarFind.svg";
import { ReactComponent as CartIcon } from "../assets/navbarCart.svg";
import { ReactComponent as FavIcon } from "../assets/navbarFav.svg";
import { actions, selectors } from "../slices/cartSlice";
import { useState } from "react";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectors.selectAll);
  const [searchClicked, setSearchClicked] = useState(false);

  const cartCount = cart.reduce(
    (accum, current) => accum + current.quantity,
    0
  );

  const toastIsntCompleted = () =>
    toast.info("This section is not completed yet.");

  const handleSearchClick = () => setSearchClicked(!searchClicked);
  const handleFavoriteClick = () => toastIsntCompleted();
  const handleShopClick = () => dispatch(actions.setSelectedCategory(null));

  return (
    <nav className="nav flex justify-between items-center px-90 py-5">
      <div className="font-poiret">
        <Link className="button" to="/">
          HITE
        </Link>
      </div>
      <div className="buttons flex justify-center space-x-4 font-opensans">
        <Link className="button" to="/">
          HOME
        </Link>
        <Link onClick={handleShopClick} className="button" to="/shop">
          SHOP
        </Link>
        <Link className="button" to="/about">
          ABOUT
        </Link>
      </div>
      <div className="flex flex-row items-start space-x-1 text-lg font-opensans">
        <button className="button" onClick={handleSearchClick}>
          <SearchIcon />
        </button>
        <div className={`search-input-wrapper ${searchClicked ? "show" : ""}`}>
          {searchClicked && <Search />}
        </div>
        <Link className="button" onClick={handleFavoriteClick}>
          <FavIcon />
        </Link>
        <div className="relative">
          <Link className="button" to="/cart">
            <CartIcon />
            {cartCount !== 0 ? (
              <span className="absolute cart-count">{cartCount}</span>
            ) : (
              <span></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

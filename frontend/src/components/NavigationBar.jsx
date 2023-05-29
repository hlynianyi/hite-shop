import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/navbarFind.svg";
import { ReactComponent as CartIcon } from "../assets/navbarCart.svg";
import { ReactComponent as FavIcon } from "../assets/navbarFav.svg";
import { useDispatch } from "react-redux";
import { actions } from "../slices/categoriesSlice";

const NavigationBar = () => {
  const dispatch = useDispatch();

  const handleShopClick = () => {
    dispatch(actions.setSelectedCategory(null));
  };

  return (
    <nav className="flex justify-between px-90 py-5">
      <div className="text-2xl font-poiret">
        <Link className="button" to="/">
          HITE
        </Link>
      </div>
      <div className="flex justify-center space-x-4 text-lg font-opensans">
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
      <div className="flex flex-row space-x-4 text-lg font-opensans">
        <Link className="button" to="/cart">
          <SearchIcon />
        </Link>
        <Link className="button" to="/cart">
          <FavIcon />
        </Link>
        <Link className="button" to="/cart">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;

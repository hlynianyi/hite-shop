import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as SearchIcon } from "../assets/navbarFind.svg";
import { ReactComponent as CartIcon } from "../assets/navbarCart.svg";
import { ReactComponent as FavIcon } from "../assets/navbarFav.svg";
import { actions, selectors } from "../slices/cartSlice";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectors.selectAll);

  const cartCount = cart.reduce(
    (accum, current) => accum + current.quantity,
    0
  );
  console.log("cartCount :>> ", cartCount, cart);

  const toastIsntCompleted = () =>
    toast.info("This section is not completed yet.");
  const handleSearchClick = () => toastIsntCompleted();
  const handleFavoriteClick = () => toastIsntCompleted();
  const handleShopClick = () => dispatch(actions.setSelectedCategory(null));

  return (
    <nav className="nav flex justify-between px-90 py-5">
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
      <div className="flex flex-row space-x-4 text-lg font-opensans">
        <Link className="button" onClick={handleSearchClick}>
          <SearchIcon />
        </Link>
        <Link className="button" onClick={handleFavoriteClick}>
          <FavIcon />
        </Link>
        <div className="relative">
          <Link className="button " to="/cart">
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

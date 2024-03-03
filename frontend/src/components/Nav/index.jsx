import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SearchButton from "./SearchButton";
import { ReactComponent as ProfileIcon } from "../../assets/navbarProfile.svg";
import CartButton from "./CartButton";

const LINKS = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "SHOP",
    path: "/shop",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
];

const NavigationBar = () => {
  const toastIsntCompleted = () =>
    toast.info("This section is not completed yet.");

  const handleFavoriteClick = () => toastIsntCompleted();
  // const handleShopClick = () => dispatch(actions.setSelectedCategory(null));

  return (
    <nav className="nav flex justify-between items-center px-90 py-5">
      <div className="font-poiret">
        <Link className="button" to="/">
          HITE
        </Link>
      </div>
      <div className="buttons flex justify-center space-x-4 font-opensans">
        {LINKS.map((link) => (
          <Link className="button" to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-start space-x-1 text-lg font-opensans">
        <SearchButton />
        <Link className="button" onClick={handleFavoriteClick}>
          <ProfileIcon />
        </Link>
        <CartButton />
      </div>
    </nav>
  );
};

export default NavigationBar;

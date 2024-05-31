import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/index";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import { ReactComponent as ProfileIcon } from "../../assets/navbarProfile.svg";

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
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    return currentUser ? navigate("/profile") : navigate("/login");
  };

  return (
    <nav className="nav flex justify-between items-center px-90 py-5">
      <div className="mr-2 font-poiret">
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
      <div className="ml-2 flex flex-row items-start space-x-1 text-lg font-opensans">
        <SearchButton />
        <button className="" onClick={handleProfileClick}>
          <ProfileIcon />
        </button>
        <CartButton />
      </div>
    </nav>
  );
};

export default NavigationBar;

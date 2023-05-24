import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from '../assets/navbarFind.svg';
import { ReactComponent as CartIcon } from '../assets/navbarCart.svg';
import { ReactComponent as FavIcon } from '../assets/navbarFav.svg';

const NavigationBar = () => {

  return (
    <nav className="flex justify-between px-90 py-5">
      <div className="text-2xl font-poiret">
        <p>HITE</p>
      </div>
      <div className="space-x-4 text-lg font-opensans">
        <Link className="button" to='/'>HOME</Link>
        <Link className="button" to='/shop'>SHOP</Link>
        <Link className="button" to='/about'>ABOUT</Link>       
      </div>
      <div className="space-x-4 text-lg font-opensans">
        <button className="button"><SearchIcon/></button>
        <button className="button"><CartIcon/></button>
        <button className="button"><FavIcon/></button>       
      </div>
    </nav>
  );
};

export default NavigationBar;

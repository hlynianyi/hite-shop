import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import { ReactComponent as TelegramIcon } from "../assets/telegram.svg";

const Footer = () => {
  const handleNotReadyClick = () =>
    toast.info("This section is not completed yet.");

  return (
    <div className="footer">
      <div className="footer-socials flex-col font-poiret">
        <p className="pb-4 font-normal">Hite</p>
        
        <div className="space-x-4 text-lg font-opensans">
          <button onClick={handleNotReadyClick} className="button">
            <FacebookIcon />
          </button>
          <button onClick={handleNotReadyClick} className="button">
            <InstagramIcon />
          </button>
          <button onClick={handleNotReadyClick} className="button">
            <YoutubeIcon />
          </button>
          <button onClick={handleNotReadyClick} className="button">
            <TelegramIcon />
          </button>
        </div>
        <p className="footer-author text-lg">
          Project was build by Hlynianyi Vladyslav ©
        </p>
      </div>
      <div className="flex flex-col font-opensans">
        <p className="pb-6">Menu</p>
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button" to="/shop">
          Shop
        </Link>
        <Link className="button" to="/about">
          About
        </Link>
      </div>
     
      <div className="flex-column font-opensans">
        <p className="pb-6">Contact me</p>
        <p>+38 (099) 707-81-64</p>
        <p>hlynianyi.vladyslav@gmail.com</p>
        <p>github.com/hlynianyi/hite-shop</p>
      </div>
    </div>
  );
};

export default Footer;

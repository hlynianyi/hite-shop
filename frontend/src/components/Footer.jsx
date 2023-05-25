import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../assets/youtube.svg';
import { ReactComponent as TelegramIcon } from '../assets/telegram.svg';

// Спросить женю про "правильность" свертывания в адаптиве
const Footer = () => {

  return (
    <div className="flex justify-between py-20 px-90 bg-white text-lg">
      <div className="flex-col font-poiret">
        <p className="pb-4 font-normal">
          Hite
        </p>
        <p className="pb-8 w-full md:max-w-md text-lg">
          Project was build by Hlynianyi Vladyslav  ©
        </p>
        <div className="space-x-4 text-lg font-opensans">
        <button className="button"><FacebookIcon/></button>
        <button className="button"><InstagramIcon/></button>
        <button className="button"><YoutubeIcon/></button>
        <button className="button"><TelegramIcon/></button>

      </div>
      </div>
      <div className="flex flex-col font-opensans">
        <p className="pb-6">Menu</p>
        <Link className="button" to='/'>Home</Link>
        <Link className="button" to='/home'>Shop</Link>
        <Link className="button" to='/about'>About</Link>  
      </div>
      <div className="flex flex-col font-opensans">
        <p className="pb-6">Additional menu</p>
        <Link className="button" to='/'>Blog</Link>
        <Link className="button" to='/home'>Payment and Delivery</Link>
        <Link className="button" to='/about'>Privacy Policy</Link>  
      </div>
      <div className="flex-column font-opensans">
        <p className="pb-6">Contact me</p>
        <p>+38 (099) 707-81-64</p>
        <p>hlynianyi.vladyslav@gmail.com</p>
        <p>github.com/hlynianyi/hite-shop</p>
      </div>
    </div>
  )
}

export default Footer;
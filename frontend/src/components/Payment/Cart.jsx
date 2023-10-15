import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";
import { selectors } from "../../slices/cartSlice";

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center text-[1.5rem] font-poiret">
      <p>Seems like you did'nt add anything to the cart yet</p>
      <p className="pb-8">
        We trully believe that you going to find someone to your taste in our
        shop
      </p>
      <Link
        to={"/shop"}
        className="py-[6px] px-[24px] border rounded-md bg-cartContinue hover:bg-gray-500 hover:text-white text-[26px] leading-[32px] font-opensans text-productprice"
      >
        Go to the Shop
      </Link>
    </div>
  );
};

const Cart = () => {
  const cart = useSelector(selectors.selectAll);

  return (
    <div className="flex flex-col px-[96px] cart-container">
      <div className="pt-[32px] pb-[32px] text-[48px] leading-[56x] font-poiret cart-title">
        Cart
      </div>
      {cart.length ? <CartProducts /> : <CartEmpty />}
    </div>
  );
};

export default Cart;

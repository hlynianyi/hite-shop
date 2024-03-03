import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/navbarCart.svg";
import { selectors } from "../../slices/cartSlice";

const CartButton = () => {
  const cart = useSelector(selectors.selectAll);
  const cartCount = cart.reduce(
    (accum, current) => accum + current.quantity,
    0
  );

  return (
    <div className="relative pl-1">
      <Link className="button" to="/cart">
        <CartIcon />
        {cartCount !== 0 ? (
          <span className="absolute cart-count">{cartCount}</span>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
};

export default CartButton;

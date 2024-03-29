import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ProductLine } from "../../assets/productLine.svg";
import { ReactComponent as MinusIcon } from "../../assets/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/plusIcon.svg";
import { toast } from "react-toastify";
import { actions, selectors } from "../../slices/cartSlice";
import Decimal from "decimal.js";

const CartProducts = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectors.selectAll);
  const [currentSum, setCurrentSum] = useState(0);

  useEffect(() => {
    let sum = new Decimal(0);
    for (let product of cart) {
      sum = sum.plus(new Decimal(product.price).times(product.quantity));
    }
    setCurrentSum(sum);
  }, [cart]);
  const removeFromCart = (product) => {
    toast.success("Product removed from cart.");
    dispatch(actions.removeFromCart(product.id));
  };
  const incrementQuantity = (product) => {
    dispatch(actions.incrementQuantity({ id: product.id }));
  };

  const decrementQuantity = (product) => {
    dispatch(actions.decrementQuantity({ id: product.id }));
  };

  return (
    <div>
      <div className="flex flex-col space-y-8 cart-list">
        {cart.map((product) => (
          <div key={product.id} className="pb-8">
            <div className="relative flex w-full pb-8 cart-product">
              <div className="image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="p-0 object-scale-down w-[298px] h-[326px]"
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <p className="w-[80%] pl-12 font-poiret text-[28px] leading-[33px] title">
                  {product.title}
                </p>
                <div className="flex flex-row pl-12 summary">
                  <p className="w-1/2 font-poiret text-[26px] price">
                    ${product.price}
                  </p>
                  <div className="flex justify-between w-1/2">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => decrementQuantity(product)}>
                        <MinusIcon />
                      </button>
                      <p className="font-opensans text-[28px]">
                        {product.quantity}
                      </p>
                      <button onClick={() => incrementQuantity(product)}>
                        <PlusIcon />
                      </button>
                    </div>
                    <div>
                      <p className="font-poiret text-[26px]">
                        $
                        {parseFloat(product.price * product.quantity).toFixed(
                          1
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product)}
                className="absolute top-0 right-0 text-customblue hover:text-producttitle"
              >
                Delete
              </button>
            </div>
            <ProductLine className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="flex flex-col w-screen pt-8">
          <p className="flex justify-end font-opensans pb-[18px] text-[32px] leading-[49px]">
            Total: ${currentSum.toFixed(1)}
          </p>
          <div className="flex flex-row justify-between">
            <Link
              to={"/shop"}
              className="py-[6px] px-[48px] border rounded-md bg-cartContinue hover:bg-gray-500 hover:text-white text-[26px] leading-[38px] font-opensans text-productprice"
            >
              Continue shopping
            </Link>
            <Link
              to={"/payment"}
              className="py-[6px] px-[64px] border rounded-md bg-customblue hover:bg-gray-500 text-[28px] leading-[38px] font-opensans text-white"
            >
              Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;

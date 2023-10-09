import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ProductLine } from "../assets/productLine.svg";
import { ReactComponent as MinusIcon } from "../assets/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../assets/plusIcon.svg";
import { toast } from "react-toastify";
import { actions, selectors } from "../slices/cartSlice";

const Cart = () => {
  const cart = useSelector(selectors.selectAll);
  const dispatch = useDispatch();
  const [currentSum, setCurrentSum] = useState(0);
  const [quantityByProductId, setQuantityByProductId] = useState({});

  useEffect(() => {
    let sum = 0;
    for (let product of cart) {
      const quantity = quantityByProductId[product.id] || 1;
      sum += product.price * quantity;
    }
    setCurrentSum(parseFloat(sum.toFixed(1)));
  }, [cart, quantityByProductId]);

  const removeFromCart = (product) => {
    toast.success("Product removed from cart.");
    dispatch(actions.removeFromCart(product.id));
  };

  const QuantityBlock = ({ product }) => {
    const quantity = quantityByProductId[product.id] || 1;

    const increment = () => {
      const newQuantity = quantity + 1;
      setQuantityByProductId({
        ...quantityByProductId,
        [product.id]: newQuantity,
      });
    };

    const decrement = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantityByProductId({
          ...quantityByProductId,
          [product.id]: newQuantity,
        });
      }
    };

    return (
      <div className="flex justify-between w-1/2">
        <div className="flex items-center space-x-4">
          <button onClick={decrement}>
            <MinusIcon />
          </button>
          <p className="font-opensans text-[28px]">{quantity}</p>
          <button onClick={increment}>
            <PlusIcon />
          </button>
        </div>
        <div>
          <p className="font-poiret text-[26px]">
            ${parseFloat((product.price * quantity).toFixed(1))}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col px-[96px] cart-container">
      <div className="pt-[32px] pb-[24px] text-[48px] leading-[56x] font-poiret cart-title">
        Cart
      </div>
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
                  <QuantityBlock product={product} />
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
      <Link
        to={"/shop"}
        className="py-[6px] px-[48px] w-[298px] border rounded-md bg-cartContinue hover:bg-gray-200 text-[26px] leading-[38px] font-opensans text-productprice"
      >
        Continue shopping
      </Link>
      <div className="flex justify-end">
        <div className="flex flex-col">
          <p className="flex justify-end font-opensans pb-[18px] text-[32px] leading-[49px]">
            Total: ${currentSum}
          </p>
          <Link
            to={"/payment"}
            className="py-[6px] px-[64px] border rounded-md bg-customblue hover:bg-gray-500 text-[28px] leading-[38px] font-opensans text-white"
          >
            Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

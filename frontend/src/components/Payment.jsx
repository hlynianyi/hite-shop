import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as AppleLogo } from "../assets/apple.svg";
import { ReactComponent as CardIcon } from "../assets/paymentCardIcon.svg";
import { ReactComponent as VisaIcon } from "../assets/visa.svg";
import { ReactComponent as MastercardIcon } from "../assets/mastercard.svg";
import { selectors } from "../slices/cartSlice";
import { actions } from "../slices/cartSlice";

// formik should be used by i am too lazy ;(
const Payment = () => {
  const [value, setValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(selectors.selectAll);
  const navigate = useNavigate();

  let sum = 0;
  if (cart.length !== 0) {
    cart.forEach((product) => (sum += product.price));
  }

  const handleApplePay = () => {
    if (cart.length !== 0) {
      toast.success("Thank you for your order!");
      dispatch(actions.removeAll());
      navigate("/");
      return;
    }
    toast.info("You have no products in cart :(");
  };

  const handleCardPay = () => {
    if (cart.length !== 0) {
      toast.success("Thank you for your order!");
      dispatch(actions.removeAll());
      navigate("/");
      return;
    }
    toast.info("You have no products in cart :(");
  };

  const handleInput = (event) => {
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
    }
  };

  const handleCardInput = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{4})/g, "$1 ").trim();

    if (formatted.length <= 19) {
      setValue(formatted);
      setIsComplete(formatted.length === 19);
    } else {
      setValue(formatted.slice(0, 19));
    }
  };

  return (
    <div className="pt-[54px] pr-[180px] flex space-x-8">
      <div className="w-1/2 bg-[#F4F6FA] flex flex-col relative">
        {cart.map((product) => (
          <div key={product.id}>
            <div className="py-4">
              <div className="relative flex w-full">
                <div className="pl-[80px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="p-0 object-scale-down mix-blend-multiply w-[298px] h-[326px]"
                  />
                </div>
                <div className="flex flex-col w-full justify-between">
                  <p className="w-[80%] pt-4 pl-8 font-poiret text-[20px] leading-[24px]">
                    {product.title}
                  </p>
                  <div className="flex flex-row justify-end pl-8 pb-12">
                    <p className="flex justify-center w-1/2 font-opensans text-[21px] leading-[28px]">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-[15px] right-[20px]">
          <p className="pb-[15pb] pr-[24px] flex justify-end font-opensans text-[32px] leading-[49px]">
            Total: ${sum}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-10">
        <p className="font-poiret text-[48px] leading-[56px]">
          Payment and shippment details
        </p>
        <input
          className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl"
          onInput={handleInput}
          type="text"
          placeholder="Name *"
        />
        <input
          className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl"
          onInput={handleInput}
          type="text"
          placeholder="Surname *"
        />
        <input
          className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl"
          onInput={handleInput}
          type="text"
          placeholder="City*"
        />
        <input
          className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl"
          onInput={handleInput}
          type="text"
          placeholder="Street *"
        />
        <div className="flex justify-between space-x-8">
          <input
            className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl w-1/3"
            type="text"
            placeholder="House *"
          />
          <input
            className="pl-4 py-4 border-[1px] border-solid border-black rounded-2xl w-2/3"
            type="text"
            placeholder="Flat *"
          />
        </div>
        <button
          onClick={handleApplePay}
          className="flex justify-center py-[15px] w-full bg-black rounded-2xl"
        >
          <AppleLogo />
        </button>
        <p className="font-opensans text-[18px] leading-[25px]">
          Or use another payment method
        </p>
        <div className="relative">
          <input
            value={value}
            onInput={handleCardInput}
            className="w-full py-[24px] px-[80px] number-input bg-gray-200 rounded-2xl text-opensans text-lg"
            type="text"
            placeholder="Payment card"
            inputMode="numeric"
            pattern="\d*"
          />
          <CardIcon className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <VisaIcon className="absolute right-24 top-1/2 transform -translate-y-1/2" />
          <MastercardIcon className="absolute right-8 top-1/2 transform -translate-y-1/2" />

          {isComplete && (
            <button
              onClick={handleCardPay}
              className="absolute right-40 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-green-700 text-white w-16 h-8 flex items-center justify-center rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;

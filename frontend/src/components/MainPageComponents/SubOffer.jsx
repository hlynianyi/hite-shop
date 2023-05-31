import React, { useState } from "react";
import { toast } from "react-toastify";

const SubOffer = () => {
  const [email, setEmail] = useState("");

  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubcribe = () => {
    setEmail("");
    toast.success("You are subscribed to our news and offers now!");
  };

  return (
    <div className="pt-4 pb-24 flex flex-col items-center bg-customgray m-0 p-0">
      <div className="flex flex-col">
        <p className="pt-12 pb-8 font-poiret text-center text-2xl">
          Subscribe and get -30% offer
        </p>
        <div className="flex justify-between bg-customemail rounded-full">
          <input
            value={email}
            onInput={handleInput}
            className="bg-transparent outline-none w-96 px-1 text-dark text-2xl placeholder-gray pl-5 font-poiret"
            type="email"
            placeholder="Email"
          />
          <button
            onClick={handleSubcribe}
            className="bg-customblue hover:bg-gray-400 text-white text-2xl px-4 py-1 rounded-full font-opensans"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubOffer;

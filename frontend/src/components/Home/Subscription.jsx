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
    <div className="subscription bg-customgray m-0 p-0">
      <p className="font-poiret">
        Subscribe and get -30% offer
      </p>
      <div className="bg-customemail rounded-full">
        <input
          value={email}
          onInput={handleInput}
          className=" text-dark placeholder-gray font-poiret"
          type="email"
          name="emailInput"
          placeholder="Email"
        />
        <button
          onClick={handleSubcribe}
          className="bg-customblue hover:bg-gray-400 text-white rounded-full font-opensans"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubOffer;

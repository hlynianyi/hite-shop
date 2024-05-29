import React, { useEffect } from "react";
import Carrousel from "./Carrousel";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";
import Subscription from "./Subscription";
import BestProducts from "./BestProducts";
import Discount from "./Discount";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/index";

const Home = () => {
  const { userLoggedIn } = useAuth();

  const message = `Welcome! You can create an account or login using your google service :)`;

  useEffect(() => {
    if (!userLoggedIn) {
      toast.info(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [userLoggedIn]);

  return (
    <div className="flex flex-col justify-center">
      <ToastContainer />
      <Carrousel />
      <Categories />
      <PopularProducts />
      <Discount />
      <BestProducts />
      <Subscription />
    </div>
  );
};

export default Home;

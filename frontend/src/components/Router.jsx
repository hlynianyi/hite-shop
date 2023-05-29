import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import AboutPage from "./AboutPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./MainPageComponents/Home.jsx";
import Footer from "./Footer.jsx";
import Shop from "./ShopComponents/Shop.jsx";
import ProductPage from "./ShopComponents/ProductPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./Cart.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

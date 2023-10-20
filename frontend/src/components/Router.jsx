import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import AboutPage from "./AboutPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import Footer from "./Footer.jsx";
import ShopPage from "./Shop/Shop.jsx";
import ProductPage from "./Shop/ProductPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./Payment/Cart.jsx";
import Payment from "./Payment/Payment.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

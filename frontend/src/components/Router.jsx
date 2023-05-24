import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate, Outlet,
} from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';
import AboutPage from './AboutPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './MainPageComponents/Home.jsx';
import Footer from './Footer.jsx';
import Shop from './ShopComponents/Shop.jsx';
import ProductPage from './ShopComponents/ProductPage.jsx';

const Router = () => {
  
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/error' element={<ErrorPage />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/product/:productId' element={<ProductPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;

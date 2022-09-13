import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./screens/Home";
import ClothingPage from "./screens/ClothingPage";
import ElectronicsPage from "./screens/ElectronicsPage";
import ToysPage from "./screens/ToysPage";
import CartPage from "./screens/CartPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/Signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import React from 'react'
import { CartProvider } from 'react-use-cart';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/clothing" element={<ClothingPage />}></Route>
            <Route path="/electronics" element={<ElectronicsPage />}></Route>
            <Route path="/toys" element={<ToysPage />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App

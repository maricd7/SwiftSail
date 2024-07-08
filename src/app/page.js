"use client";
import Image from "next/image";
import { Categories, Nav, Products, ShopHeader, Slider } from "./_components";
import { useEffect, useState } from "react";
import { SideCart } from "./_components/Cart";
import { ProductContextProvider } from "./contexts/ProductsContext";
import CartIcon from "./_components/Cart/CartIcon/CartIcon";
import Disclaimer from "./_components/Disclaimer/Disclaimer";
import NewsLetter from "./_components/common/Modals/NewsLetter/NewsLetter";
import { AuthContextProvider } from "./contexts/AuthContext";

export default function Home() {
  const [newsLetter, setNewsLetter] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }
  useEffect(() => {
    setTimeout(() => {
      setNewsLetter(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className="mt-16 bg-gray-50 lg:mx-72 mx-4">
        <ShopHeader />
        {newsLetter ? <NewsLetter setNewsLetter={setNewsLetter} /> : <></>}
        {/* <Slider/> */}
        <Categories />
        <Products />
      </div>
      {cartOpened && <SideCart toggleCart={toggleCart} />}
      <CartIcon toggleCart={toggleCart} />
    </>
  );
}

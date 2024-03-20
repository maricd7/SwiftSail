"use client";
import Image from "next/image";
import { Categories, Nav, Products, ShopHeader, Slider } from "./_components";
import {useState } from "react";
import { SideCart } from "./_components/Cart";
import { ProductContextProvider } from "./contexts/ProductsContext";
import CartIcon from "./_components/Cart/CartIcon/CartIcon";
import Disclaimer from "./_components/Disclaimer/Disclaimer";
import NewsLetter from "./_components/common/Modals/NewsLetter/NewsLetter";

export default function Home() {
  const [newsLetter,setNewsLetter] = useState(false)
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }
  setTimeout(()=>{
    setNewsLetter(true)
  },3000)
  return (
    <div>
      <ProductContextProvider>
      <Nav/>
       <div className="mt-20">
        <ShopHeader/>
        {newsLetter ? <NewsLetter setNewsLetter={setNewsLetter}/> : <></>}
       {/* <Slider/> */}
        <Categories/>
        <Products />
       </div>
       {cartOpened && <SideCart toggleCart={toggleCart} />}
       <CartIcon toggleCart={toggleCart}/>
      </ProductContextProvider>
    </div>
  );
}

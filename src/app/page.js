"use client";
import Image from "next/image";
import { Categories, Nav, Products, Slider } from "./_components";
import {useState } from "react";
import { SideCart } from "./_components/Cart";
import { ProductContextProvider } from "./contexts/ProductsContext";
import CartIcon from "./_components/Cart/CartIcon/CartIcon";

export default function Home() {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
    console.log("cart", cartOpened);
  }
  return (
    <div>
      <ProductContextProvider>
       <div className="mt-20">
       <Nav toggleCart={toggleCart}/>
       <Slider/>
        <Categories/>
        <Products />
       </div>
       {cartOpened && <SideCart toggleCart={toggleCart} />}
       <CartIcon toggleCart={toggleCart}/>
      </ProductContextProvider>
    </div>
  );
}

"use client";
import Image from "next/image";
import { Nav, Products } from "./_components";
import { SideCart } from "./_components/Cart";
import { useState } from "react";
import { ProductContextProvider } from "./contexts/CartContext";

export default function Home() {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
    console.log("cart", cartOpened);
  }
  return (
    <div>
      <ProductContextProvider>
        {cartOpened && <SideCart toggleCart={toggleCart} />}
        <Nav toggleCart={toggleCart} />
        <Products />
      </ProductContextProvider>
    </div>
  );
}

"use client";
import { Nav, TopBox } from "@/app/_components";
import React, { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import CartIcon from "@/app/_components/Cart/CartIcon/CartIcon";
import { SideCart } from "@/app/_components/Cart";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";

function ProductPage({ params }) {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }

  return (
    <>
      <Nav />
      <div className="mx-auto my-24 flex justify-center h-screen	">
        <TopBoxWrapper toggleCart={toggleCart} />
        <CartIcon toggleCart={toggleCart} />
        {cartOpened ? <SideCart toggleCart={toggleCart} /> : <></>}
      </div>
    </>
  );
}

function TopBoxWrapper({ toggleCart }) {
  const searchParams = useSearchParams();
  return <TopBox productparams={searchParams} />;
}

export default ProductPage;

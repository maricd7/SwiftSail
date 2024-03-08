'use client'
import { Nav, TopBox } from "@/app/_components";
import React, { Suspense, useContext, useState } from "react";
import { useSearchParams } from 'next/navigation'
import CartIcon from "@/app/_components/Cart/CartIcon/CartIcon";
import { SideCart } from "@/app/_components/Cart";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";

function ProductPage({ params}) {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }

  return (
    <ProductContextProvider>
      <Nav/>
      <div className="mx-auto my-24 flex justify-center h-screen	">
        <Suspense fallback={<div>Loading...</div>}>
          <TopBoxWrapper toggleCart={toggleCart}/>
        </Suspense>
        <CartIcon toggleCart={toggleCart}/>
        {cartOpened ?  <SideCart toggleCart={toggleCart}/>  : <></>} 
      </div>
    </ProductContextProvider>
  );
}

function TopBoxWrapper({ toggleCart }) {
  const searchParams = useSearchParams();
  return <TopBox productparams={searchParams} />;
}

export default ProductPage;


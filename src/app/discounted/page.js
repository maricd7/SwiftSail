"use client";
import React, { useState } from "react";
import { ProductContextProvider } from "../contexts/ProductsContext";
import DiscountedItems from "../_components/DiscountedItems/DiscountedItems";
import { Heading, Nav } from "../_components";
import CartIcon from "../_components/Cart/CartIcon/CartIcon";
import { SideCart } from "../_components/Cart";

function DisocuntedProducts() {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }
  return (
    <div>
      <ProductContextProvider>
        <Nav />
        <Heading text="Discounted Products" />
        <DiscountedItems />
        {cartOpened && <SideCart toggleCart={toggleCart} />}
       <CartIcon toggleCart={toggleCart}/>
      </ProductContextProvider>
    </div>
  );
}

export default DisocuntedProducts;

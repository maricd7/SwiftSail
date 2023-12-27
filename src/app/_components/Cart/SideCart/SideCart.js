import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useProductContext } from "@/app/contexts/CartContext";
import { CartProduct } from "../CartProduct";

export const SideCart = ({ toggleCart }) => {
  const { cart, removeFromCart } = useProductContext();

  useEffect(() => {
    console.log("deki", cart);
  }, [cart]);

  return (
    <div>
      <div className="h-full w-1/4 bg-white fixed right-0 z-40 mx-0 my-0 p-4">
        <div className="w-full flex justify-end flex-col gap-4">
          <Icon
            className="cursor-pointer"
            icon="carbon:close"
            onClick={toggleCart}
            color="black"
            width="40"
            height="40"
          />
          {!cart && <div>Your Cart is empty</div>}
          {cart && cart.map((item) => <CartProduct product={item} onClick={()=>removeFromCart(item.id)}/>)}
        </div>
      </div>
    </div>
  );
};

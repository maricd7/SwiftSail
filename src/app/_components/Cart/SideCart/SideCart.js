import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { CartProduct } from "../CartProduct";
import { CtaButton } from "../../common";
import Link from "next/link";
export const SideCart = ({ toggleCart }) => {
  const { cart, removeFromCart, quanitySetter } = useProductContext();
  useEffect(() => {}, [cart]);

  return (
    <div>
      <div className="h-screen md:w-1/4 w-full bg-white  fixed right-0 z-40 mx-0 my-0 p-4 top-0   ">
        <div className="w-full flex justify-end flex-col gap-4">
          <Icon
            className="cursor-pointer"
            icon="carbon:close"
            onClick={toggleCart}
            color="black"
            width="40"
            height="40"
          />
          {!cart.length && <div>Your Cart is empty</div>}
          {cart &&
            cart.map((item, index) => (
              <CartProduct
                product={item}
                onClick={() => removeFromCart(item.id)}
                key={index}
                onChange={quanitySetter}
              />
            ))}
          <Link href="/checkout">
            <CtaButton text="Go to checkout" />
          </Link>
        </div>
      </div>
    </div>
  );
};

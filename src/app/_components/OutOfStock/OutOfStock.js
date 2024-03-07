'use client'
import { useProductContext } from "@/app/contexts/ProductsContext";
import React, { useState } from "react";

export default function OutOfStock({product}) {
  const { addToWishList, removeFromWishlist, wishlist } = useProductContext();
  
  const isProductInWishlist = wishlist.some(wish => wish.id === product.id);
  console.log('asdasd')
  function handleClick() {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishList(product);
    }
  }
  

  return (
    <div className="flex flex-col w-full">
      <span className="bg-red-200 text-red-700 py-2 px-4 text-center w-full absolute top-0 z-40 rounded-md">
        Out of Stock
      </span>
      <button onClick={()=>{handleClick()}} className="rounded-lg w-full flex justify-center mt-4 bg-orange-500 text-white p-4 hover:shadow-[0_3px_10px_rgb(253,126,20,0.2)]">
        {isProductInWishlist ? "Remove from WishList" : "Add to WishList"}
      </button> 
    </div>
  );
}

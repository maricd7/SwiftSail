"use client";
import React, { useEffect, useState } from "react";
import { ProductBox } from "../Products/ProductBox";
import { useProductContext } from "@/app/contexts/ProductsContext";

export default function WishListItems() {
 const {wishlist}  = useProductContext()

  return (
    <div className="flex flex-wrap gap-4  justify-start items-center h-full">
      {wishlist.map((wish, index) => (
        <ProductBox key={index} product={wish}/>
      ))}
    </div>
  );
}

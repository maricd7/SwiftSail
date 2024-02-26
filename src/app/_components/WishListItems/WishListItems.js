"use client";
import React, { useEffect, useState } from "react";
import { ProductBox } from "../Products/ProductBox";

export default function WishListItems() {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    setWishList(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

  function handleRemoveProduct(){
    setWishList(JSON.parse(localStorage.getItem("wishlist")));
  }
  return (
    <div className="flex flex-wrap gap-4  justify-start items-center h-full">
      {wishList.map((wish, index) => (
        <ProductBox key={index} product={wish} handleRemoveProduct={handleRemoveProduct}/>
      ))}
    </div>
  );
}

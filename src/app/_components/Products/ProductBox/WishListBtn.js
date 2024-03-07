"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

export const WishListBtn = ({ product}) => {

  const {addToWishList} = useProductContext() 

  function handleClick(){
    addToWishList(product)
  }
  return (
    <div className="z-20">
      <Icon
      className="absolute left-2 top-2 z-20"
      onClick={() => handleClick()}
      icon="ph:heart-straight-fill"
      width="24"
      height="24"
      style={{ color: '#000' }}
    />
    {/* {wishListModal ? <AddedToWishList/> : <></>}
    {removedWishList ? <RemovedFromWishList/> :<></>} */}
    </div>
  );
};

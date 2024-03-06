"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { AddedToWishList,RemovedFromWishList } from "../../common";
import useWishList from "@/app/custom-hooks/useWishList";

export const WishListBtn = ({ product,handleRemoveProduct,setWishList,iconColor,setIconColor,wishListModal,setWishListModal,removedWishList,setRemovedWishList}) => {

  useEffect(() => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = existingWishlist.some(
      (item) => item.id === product.id
    );

    if (isProductInWishlist) {
      setIconColor("#FF6961");
    }
  }, [product.id]);

  const handleClick = () => {
    useWishList(product,setIconColor,setWishList,wishListModal,removedWishList,setWishListModal,setRemovedWishList)
  }

  return (
    <div className="z-20">
      <Icon
      className="absolute left-2 top-2 z-20"
      onClick={() => handleClick()}
      icon="ph:heart-straight-fill"
      width="24"
      height="24"
      style={{ color: iconColor }}
    />
    {wishListModal ? <AddedToWishList/> : <></>}
    {removedWishList ? <RemovedFromWishList/> :<></>}
    </div>
  );
};

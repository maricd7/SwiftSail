"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

export const WishListBtn = ({ product }) => {
  const [iconColor, setIconColor] = useState("#808080");

  const handleClick = () => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = existingWishlist.some(
      (item) => item.id === product.id
    );

    if (isProductInWishlist) {
      const newWishList = existingWishlist.filter(item => item.id !== product.id)
      localStorage.setItem('wishlist', JSON.stringify(newWishList))
      return;
    }
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setIconColor(iconColor === "#808080" ? "#FF6961" : "#808080");
  };
  return (
    <Icon
      className="absolute left-2 top-2 z-40"
      onClick={() => handleClick()}
      icon="ph:heart-straight-fill"
      width="24"
      height="24"
      style={{ color: iconColor }}
    />
  );
};

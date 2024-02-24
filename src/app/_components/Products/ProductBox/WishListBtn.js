"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { AddedToWishList } from "../../common";

export const WishListBtn = ({ product }) => {
  const [iconColor, setIconColor] = useState("#808080");
  const [wishListModal, setWishListModal] = useState(false)
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
    handleModal()
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = existingWishlist.some(
      (item) => item.id === product.id
    );

    //check if product exists
    if (isProductInWishlist) {
      const newWishList = existingWishlist.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("wishlist", JSON.stringify(newWishList));
      setIconColor("#808080");
      return;
    }
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIconColor("#FF6961");
  };

  function handleModal() {
    setWishListModal(!wishListModal);
    setTimeout(() => {
      setWishListModal(false);
    }, 3000);
  }

  return (
    <div>
      <Icon
      className="absolute left-2 top-2 z-20"
      onClick={() => handleClick()}
      icon="ph:heart-straight-fill"
      width="24"
      height="24"
      style={{ color: iconColor }}
    />
    {wishListModal ? <AddedToWishList/> : <></>}
    </div>
  );
};

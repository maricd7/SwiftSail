"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { AddedToWishList, RemovedFromWishList } from "../../common";

export const WishListBtn = ({ product }) => {
  const { addToWishList, removeFromWishlist, wishlist } = useProductContext();
  const [wishListModal,setWishListModal] = useState(false)
  const [removedWishList,setRemovedWishList]=useState(false)
  const isProductInWishlist = wishlist.some(wish => wish.id === product.id);
  const wishlistIcon = isProductInWishlist ? '#FF6961' : '#808080';

  function handleClick() {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
      handleRemove()
    } else {
      addToWishList(product);
      handleModal()
    }
  }
  function handleModal() {
    setWishListModal(!wishListModal);
    setTimeout(() => {
      setWishListModal(false);
    }, 1500);
  }
  function handleRemove() {
    setRemovedWishList(!wishListModal);
    setTimeout(() => {
      setRemovedWishList(false);
    }, 1500);
  }
  return (
    <div className="z-20">
      <Icon
        className="absolute left-2 top-2 z-20"
        onClick={handleClick}
        icon="ph:heart-straight-fill"
        width="24"
        height="24"
        style={{ color: wishlistIcon }}
      />
      <AddedToWishList/>
      <RemovedFromWishList/>
    </div>
  );
};

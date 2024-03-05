"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { AddedToWishList,RemovedFromWishList } from "../../common";

export const WishListBtn = ({ product,handleRemoveProduct,setWishList }) => {
  const [iconColor, setIconColor] = useState("#808080");
  const [wishListModal, setWishListModal] = useState(false)
  const [removedWishList,setRemovedWishList]= useState(false);



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
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = existingWishlist.some(
      (item) => item.id === product.id
    );

    //check if product exists in wishlist
    if (isProductInWishlist) {
      const newWishList = existingWishlist.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("wishlist", JSON.stringify(newWishList));

      // handleRemoveProduct();
      setIconColor("#808080");
      handleRemove()
      setWishList(newWishList)
      return;
    }
    
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIconColor("#FF6961");
    handleModal()
  };

  // modal for adding to wishlist
  function handleModal() {
    setWishListModal(!wishListModal);
    setTimeout(() => {
      setWishListModal(false);
    }, 1500);
  }

  //modal for removing from wishlist
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

import useWishList from "@/app/custom-hooks/useWishList";
import React from "react";

export default function OutOfStock({ product,handleRemoveProduct,setWishList,iconColor,setIconColor,wishListModal,setWishListModal,removedWishList,setRemovedWishList}) {
  function handleClick(){
    console.log('bror')
    useWishList(product,setIconColor,setWishList,wishListModal,removedWishList,setWishListModal,setRemovedWishList)
  }
  return (
    <div className="flex flex-col w-full">
      <span className="bg-red-200 text-red-700 py-2 px-4 text-center w-full absolute top-0 z-40 rounded-md">
        Out of Stock
      </span>
      <button onClick={()=>handleClick()} className="rounded-lg w-full flex justify-center mt-4 bg-orange-500 text-white p-4 hover:shadow-[0_3px_10px_rgb(253,126,20,0.2)]">
        Add to WishList
      </button>
    </div>
  );
}

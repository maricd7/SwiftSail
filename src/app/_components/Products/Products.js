"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { ProductBox } from "./ProductBox";
import { Icon } from "@iconify/react";
import { useProductContext } from "@/app/contexts/CartContext";
import { Loading } from "./loading";
import { AddedToCart, Heading } from "../common";

export const Products = () => {
  const { products } = useProductContext();
  const [cartModal, toggleCartModal] = useState(false);

  function handleModal(){
    toggleCartModal(!cartModal);
    setTimeout(()=>{
      toggleCartModal(false)
    },3000)
  }
  
  return (
    <div className="z-10 mx-72 mt-10">
      <Heading text='Our international top sellers'/>
      {cartModal ? <AddedToCart/> : console.log('modal not opened')}
      <ul className="flex flex-wrap gap-4 w-full justify-start items-center">
        {products.map((product, index) => (
          <ProductBox product={product} key={index}  handleModal={handleModal}/>
        ))}
      </ul>
    </div>
  );
};

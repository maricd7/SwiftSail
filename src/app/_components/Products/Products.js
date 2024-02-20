"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { ProductBox } from "./ProductBox";
import { Icon } from "@iconify/react";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { Loading } from "./loading";
import { AddedToCart, Heading } from "../common";

export const Products = () => {
  const [proizvodi,setProizvode] = useState([])
  const { products } = useProductContext();
  const [cartModal, toggleCartModal] = useState(false);

  function handleModal(){
    toggleCartModal(!cartModal);
    setTimeout(()=>{
      toggleCartModal(false)
    },3000)
  }
  
  useEffect(()=>{
    setProizvode(products); 
  },[products])
  function filterProducts(){
 
    const sorted = [...proizvodi].sort((a, b) => a.price - b.price);
    console.log(sorted);
    setProizvode(sorted)
  }
  return (
    <div className="z-10 mx-72 mt-10">
      <button onClick={()=>filterProducts()}>Filter</button>
      <Heading text='Our international top sellers'/>
      {cartModal ? <AddedToCart/> : <></>}
      <ul className="flex flex-wrap gap-4 w-full justify-between items-center">
        {proizvodi.map((product, index) => (
            <ProductBox product={product} key={index}  handleModal={handleModal}/>
          ))}
      </ul>
    </div>
  );
};

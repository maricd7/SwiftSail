"use client";
import React, {  useState } from "react";
import { ProductBox } from "./ProductBox";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { AddedToCart, Heading } from "../common";

export const Products = () => {
  const { products, setProducts } = useProductContext();
  const [cartModal, toggleCartModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Lowest");

  function handleModal() {
    toggleCartModal(!cartModal);
    setTimeout(() => {
      toggleCartModal(false);
    }, 3000);
  }

  function filterProducts(e) {
    setSelectedFilter(e.target.value);

    if (selectedFilter === "Lowest") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    } else {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    }
  }
  return (
    <div className="z-10 mx-72 mt-10">
      <div className="w-full justify-between flex">
        <Heading text="Our international top sellers" />
        <select value={selectedFilter} onChange={(e) => filterProducts(e)} className="text-slate-950 bg-transparent">
          <option className="bg-transparent">Lowest</option>
          <option className="bg-transparent">Highest</option>
        </select>
      </div>
      {cartModal ? <AddedToCart /> : <></>}
      <ul className="flex flex-wrap gap-4 w-full justify-between items-center">
        {products.map((product, index) => (
          <ProductBox product={product} key={index} handleModal={handleModal} />
        ))}
      </ul>
    </div>
  );
};

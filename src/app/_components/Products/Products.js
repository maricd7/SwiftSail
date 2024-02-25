"use client";
import React, { useState,useEffect } from "react";
import { ProductBox } from "./ProductBox";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { AddedToCart, Heading } from "../common";
import { FilterProducts } from "./FilterProducts";

export const Products = () => {
  const { products, setProducts } = useProductContext();
  const [cartModal, toggleCartModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter Products");

  function handleModal() {
    toggleCartModal(!cartModal);
    setTimeout(() => {
      toggleCartModal(false);
    }, 3000);
  }

  useEffect(() => {
    filterProducts(selectedFilter);
  }, [selectedFilter]);

  function filterProducts(filter) {
    let sorted = [...products];

    if (filter === "Lowest") {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (filter === "Highest") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else if (filter === "Biggest Discount") {
      sorted = [...products].sort((a, b) => b.discount - a.discount);
    }

    setProducts(sorted);
  }
  return (
    <div className="z-10  mt-10">
      <div className="w-full justify-between flex">
        <Heading text="Our international top sellers" />
        <FilterProducts selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
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

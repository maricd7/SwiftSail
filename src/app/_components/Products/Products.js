"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { ProductBox } from "./ProductBox";
import { Icon } from "@iconify/react";
import { useProductContext } from "@/app/contexts/CartContext";
import { Loading } from "./loading";

export const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="z-10">
      <ul className="flex flex-wrap gap-4 w-full justify-center items-center mt-16">
        {products.map((product, index) => (
          <ProductBox product={product} key={index} />
        ))}
      </ul>
    </div>
  );
};

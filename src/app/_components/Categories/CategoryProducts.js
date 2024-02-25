"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import React from "react";
import { useParams } from "next/navigation";
import { ProductBox } from "../Products/ProductBox";

export default function CategoryProducts() {
  const params = useParams();

  const { products } = useProductContext();


  return (
    <div className="flex flex-wrap gap-4 w-full justify-start items-center">
      {products.map((product) => {
        if (product.category === params.name) {
          return <ProductBox key={product.id} product={product} />;
        }
        return null;
      })}
    </div>
  );
}

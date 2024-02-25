"use client";
import React, { useEffect } from "react";
import { CtaButton } from "../../common";
import ProductPrice from "../../Products/ProductBox/ProductPrice";
import { useProductContext } from "@/app/contexts/ProductsContext";

export const TopBox = ({ productparams }) => {
  const productName = productparams.get("name");
  const productPrice = productparams.get("price");
  const productDescription = productparams.get("description");
  const productImage = productparams.get("image");
  const productDiscount = productparams.get("discount");
  const productId = Number(productparams.get("id"));
  const { addToCart} = useProductContext();
 
  const addProductItemToContext = (id) => () => {
    addToCart(id)
  };

  return (
    <div className="flex gap-8 mx-auto ">
      <img src={productImage} className="w-96 h-96" />
      <div className="max-w-lg w-lg">
        <h1 className="text-4xl font-bold">{productName}</h1>
        <p>{productDescription}</p>
        {productDiscount ? (
          <ProductPrice price={productPrice} discount={productDiscount} />
        ) : (
          <h2 className="text-xl font-bold">${productPrice}</h2>
        )}
        <CtaButton text="Add to cart" onClick={addProductItemToContext(productId)}/>
      </div>
    </div>
  );
};

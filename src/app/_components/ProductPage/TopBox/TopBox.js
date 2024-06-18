"use client";
import React, { useEffect, useState } from "react";
import { CtaButton } from "../../common";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import ProductPrice from "../../Products/ProductBox/ProductPrice";
import OutOfStock from "../../OutOfStock/OutOfStock";

export const TopBox = ({ productparams }) => {
  const { products, addToCart } = useProductContext();
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filtered = products.filter((product) => product.id == params.id);
    setProduct(filtered[0]);
  }, [products]);

  //adding to cart on product page
  const addProductItemToContext = (id) => () => {
    addToCart(id);
  };

  if (!product) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="flex gap-8 mx-auto ">
        <img src={product.image} className="w-96 h-96" />
        <div className="max-w-lg w-lg">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          {product.discount ? (
            <ProductPrice price={product.price} discount={product.discount} />
          ) : (
            <h2 className="text-xl font-bold">${product.price}</h2>
          )}
          <CtaButton
            text="Add to cart"
            onClick={addProductItemToContext(product.id)}
          />
        </div>
      </div>
    );
  }
};

import React from "react";
import { CtaButton } from "../../common";
import Link from "next/link";
import { useProductContext } from '@/app/contexts/CartContext';
  
export const ProductBox = ({ product}) => {
  const productRef = "/products/" + product.id;
  const {addToCart} = useProductContext()

  const addProductItemToContext = (id) => () => {
    addToCart(id);
  };
  return (
    <div className="rounded-xl max-w-xs mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer  flex flex-col justify-center items-center">
      <Link href={{ pathname: productRef, query: product }} className="flex justify-center  flex-col">
        <img
          src={product.images[0]}
          className="h-48 rounded-lg w-48"/>
        <h2 className="mt-4 w-32 h-20">{product.title}</h2>
        <h1 className="text-2xl font-bold mt-4">${product.price}</h1>
      </Link>
      <CtaButton text="Add to Cart" onClick={addProductItemToContext(product.id)}/>
    </div>
  );
};

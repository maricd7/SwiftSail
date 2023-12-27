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
    <div className="rounded-xl max-w-sm mx-auto mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer hover:border-2 border-orange-400">
      <Link href={{ pathname: productRef, query: product }} >
        <img
          src={product.images[0]}
          className="max-w-48 h-96 rounded-lg w-96"/>
        <h2 className="mt-4">{product.title}</h2>
        <h1 className="text-2xl font-bold mt-4">${product.price}</h1>
      </Link>
      <CtaButton text="Add to Cart" onClick={addProductItemToContext(product.id)}/>
    </div>
  );
};

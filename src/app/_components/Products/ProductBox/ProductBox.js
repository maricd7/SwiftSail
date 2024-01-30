import React, { Suspense } from "react";
import { CategoryTag, CtaButton } from "../../common";
import Link from "next/link";
import { useProductContext } from "@/app/contexts/CartContext";
import Image from "next/image";
import { ProductBoxImage } from "./ProductBoxImage";


export const ProductBox = ({ product, handleModal }) => {
  const productRef = "/products/" + product.id;
  const { addToCart } = useProductContext();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
    handleModal()
  };

  return (
      <div className="rounded-xl max-w-md mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer  flex flex-col justify-start items-center border-2 border-gray-300 hover:scale-105">
        <Link
          href={{ pathname: productRef, query: product }}
          className="flex justify-center  flex-col"
        >
          <ProductBoxImage product={product} />
          <div className="text-left">
            <h2 className="mt-4 mb-2 text-xl">{product.name}</h2>
            <CategoryTag product={product} />
            <p className="text-gray-400 mt-2" style={{maxWidth:'160px'}}>{product.description}</p>
          </div>
        </Link>
        <CtaButton
          text="Add to Cart"
          onClick={addProductItemToContext(product.id)}
        />
      </div>
  );
};

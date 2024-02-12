import React, {useEffect, useState } from "react";
import { CategoryTag, CtaButton } from "../../common";
import Link from "next/link";
import { useProductContext } from "@/app/contexts/ProductsContext";
import Image from "next/image";
import { ProductBoxImage } from "./ProductBoxImage";


export const ProductBox = ({ product, handleModal }) => {
  const productRef = "/products/" + product.id;
  const { addToCart } = useProductContext();
  const addProductItemToContext = (id) => () => {
    console.log('added')
    addToCart(id);
    handleModal()
  };
  const [productDescription,setProductDescription] = useState(product.description)
  function checkDescription(){
    if(productDescription.length>=56){
      console.log(productDescription.slice(0,56-3) + '&hellip;')
      setProductDescription(product.description.slice(0,56-3) + '...')
    }else{
      setProductDescription(productDescription)
    }
  }
  useEffect(()=>{
    checkDescription()
  },[product])
  return (
      <div className="rounded-xl max-w-md mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer  flex flex-col justify-start items-center border-2 border-gray-300 hover:scale-105">
        <Link
          href={{ pathname: productRef, query: product }}
          className="flex justify-center  flex-col"
        >
          <ProductBoxImage product={product} />
          <div className="text-left relative">
            {product.discount ? <span className="absolute top-0 right-0">{product.discount}</span> : console.log('no discount')}
            <h2 className="mt-4 mb-2 text-xl">{product.name}</h2>
            <CategoryTag product={product} />
            <p className="text-gray-400 mt-2 h-20" style={{maxWidth:'160px'}}>{productDescription}</p>
            <p className="mt-2 text-xl font-bold">${product.price}</p>
          </div>
        </Link>
        <CtaButton
          text="Add to Cart"
          onClick={addProductItemToContext(product.id)}
        />
      </div>
  );
};

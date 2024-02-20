import React, {useEffect, useState } from "react";
import { CategoryTag, CtaButton } from "../../common";
import Link from "next/link";
import { useProductContext } from "@/app/contexts/ProductsContext";
import Image from "next/image";
import { ProductBoxImage } from "./ProductBoxImage";
import ProductDiscount from "./ProductDiscount";
import ProductPrice from "./ProductPrice";


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
      <div className="rounded-xl max-w-md mt-8  rounded overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 cursor-pointer  flex flex-col justify-start items-center  hover:scale-105">
        <Link
          href={{ pathname: productRef, query: product }}
          className="flex justify-center  flex-col  relative"
        >
          {product.discount ? <ProductDiscount discount={product.discount}/> : <></>}
          <ProductBoxImage product={product} />
          <div className="text-left">
            <h2 className="mt-4 mb-2 text-xl">{product.name}</h2>
            <CategoryTag product={product} />
            <p className="text-gray-400 mt-2 h-20" style={{maxWidth:'160px'}}>{productDescription}</p>
            <ProductPrice price={product.price} discount={product.discount}/>
          </div>
        </Link>
        <CtaButton
          text="Add to Cart"
          onClick={addProductItemToContext(product.id)}
        />
      </div>
  );
};

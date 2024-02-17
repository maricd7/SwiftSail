import React from "react";
import { CtaButton } from "../../common";
import ProductPrice from "../../Products/ProductBox/ProductPrice";

export const TopBox = ({ productparams }) => {
  console.log(productparams, 'parametri')
  console.log(productparams, "ovo je kveri");
  const productName = productparams.get("name");
  const productPrice = productparams.get("price");
  const productDescription = productparams.get("description");
  const productImage = productparams.get('image')
  const productDiscount = productparams.get('discount');
  return (
    <div className="flex gap-8 mx-auto flex-col">
      <img src={productImage} className="w-96 h-96"/>
      <div className="max-w-lg w-lg">
        <h1 className="text-4xl font-bold">{productName}</h1>
        <p>{productDescription}</p>
        {productDiscount ? <ProductPrice price={productPrice} discount={productDiscount}/> : <h2 className="text-xl font-bold">${productPrice}</h2>}
        <CtaButton text='Add to cart'/>
      </div>
      <div>
        {productDescription}
      </div>
    </div>
  );
};

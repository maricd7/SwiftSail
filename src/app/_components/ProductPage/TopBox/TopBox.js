import React from "react";
import { CtaButton } from "../../common";

export const TopBox = ({ productparams }) => {
  console.log(productparams, 'parametri')
  console.log(productparams, "ovo je kveri");
  const productName = productparams.get("title");
  const productPrice = productparams.get("price");
  const productDescription = productparams.get("description");
  const productImage = productparams.get('image')

  return (
    <div className="flex gap-8 mx-auto">
      <img src={productImage} className="w-96 h-96"/>
      <div className="max-w-lg w-lg">
        <h1 className="text-4xl font-bold">{productName}</h1>
        <p>{productDescription}</p>
        <h2 className="text-2xl">${productPrice}</h2>
        <CtaButton text='Add to cart'/>
      </div>
    </div>
  );
};

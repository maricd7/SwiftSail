import React from "react";

export const TopBox = ({ productparams }) => {
  console.log(productparams, "ovo je kveri");
  const productName = productparams.get("title");
  const productPrice = productparams.get("price");
  const productDescription = productparams.get("description");
  const productImage = productparams.get('thumbnail')

  return (
    <div>
      <img src={productImage}/>
      <div>
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <h2>${productPrice}</h2>
      </div>
    </div>
  );
};

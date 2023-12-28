import { Icon } from "@iconify/react";
import React from "react";

export const CartProduct = ({ product, onClick,keyItem }) => {

  return (
    
    <div>
      {product &&<div className="flex items-center justify-between">
       <div className="flex items-center" key={product.id}>
       <img className="w-1/4 h-1/4" src={product.images[0]} />
        <div className="flex flex-col">
          <h2 className="text-xl">{product.title}</h2>
          <h2>$ {product.price}</h2>
        </div>
       </div>
        <Icon icon="carbon:trash-can" className="w-8 h-8" onClick={onClick}/>
      </div>}
    </div>
  );
};

import { Icon } from "@iconify/react";
import React, { useState } from "react";

export const CartProduct = ({ product, onClick,keyItem,onChange }) => {
 const [quantity, setQuantity] = useState(1)
function quanitySetter(e){
  setQuantity(e.target.value)
}

  return (
    <div>
      {product &&<div className="flex items-center justify-between">
       <div className="flex items-center gap-4" key={product.id}>
       <img className="w-1/4 h-1/4" src={product.image} />
        <div className="flex flex-col">
          <h2 className="text-xl">{product.name}</h2>
          <h2>$ {product.price}</h2>
          <select onChange={quanitySetter}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </div>
       </div>
        <Icon icon="carbon:trash-can" className="w-8 h-8" onClick={onClick}/>
      </div>}
    </div>
  );
};

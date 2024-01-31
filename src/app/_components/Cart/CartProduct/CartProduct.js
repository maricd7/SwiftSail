import { useProductContext } from "@/app/contexts/ProductsContext";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { DeleteItem } from "../../common";
import { QuantitySelector } from "../QuantitySelector";

export const CartProduct = ({ product, onClick }) => {
  const { cart, setCart } = useProductContext();
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const quantitySetter = (e, productId) => {
    let newQuantity = 1; 
    if(e.target.value == 1){
       newQuantity = 1;
    }else{
       newQuantity = parseInt(e.target.value, 10);
    }
    setQuantity(newQuantity);
    const newCart = cart.map((cartItem) =>
      cartItem.id === productId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      {product && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4" key={product.id}>
            <img className="w-1/4 h-1/4" src={product.image} alt={product.name} />
            <div className="flex flex-col">
              <h2 className="text-xl">{product.name}</h2>
              <h2>$ {product.price}</h2>
              <QuantitySelector onChange={(e) => quantitySetter(e, product.id)} value={quantity}/>
            </div>
          </div>
          <DeleteItem onClick={onClick}/>
        </div>
      )}
    </div>
  );
};

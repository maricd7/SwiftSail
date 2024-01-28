import { useProductContext } from "@/app/contexts/CartContext";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const CartProduct = ({ product, onClick }) => {
  const { cart, setCart } = useProductContext();
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const quantitySetter = (e, productId) => {
    const newQuantity = parseInt(e.target.value, 10);
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
              <select onChange={(e) => quantitySetter(e, product.id)} value={quantity}>
                {[1, 2, 3].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Icon icon="carbon:trash-can" className="w-8 h-8" onClick={onClick} />
        </div>
      )}
    </div>
  );
};

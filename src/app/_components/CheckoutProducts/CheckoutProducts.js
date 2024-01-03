'use client'
import React, { useContext, useEffect, useState } from "react";

export const CheckoutProducts = () => {
    const [cart,setCart] = useState([])
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')))
    },[cart])
  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

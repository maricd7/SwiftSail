'use client'
import React, { useContext, useEffect, useState } from "react";

export const CheckoutProducts = () => {
    const [cart,setCart] = useState([])
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')))
    },[cart])
  return (
    <div className='w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 '>
      <h4 className="font-semibold">Products</h4>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="flex justify-between">
            <span>{product.title}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

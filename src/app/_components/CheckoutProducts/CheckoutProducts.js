'use client'
import React, { useContext, useEffect, useState } from "react";

export const CheckoutProducts = () => {
    const [cart,setCart] = useState([])
    const[total,setTotal] = useState(null);
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')))
    },[])


    //total setter
    useEffect(() => {
      let sum = 0;
      cart.forEach((product) => {
        sum += product.price;
      });
      setTotal(sum);
    }, [cart]);

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
      <div className="w-full flex justify-between align-center mt-4">
      <p>Total:</p>
      <span className="font-bold">${total}</span>
      </div>
    </div>
  );
};

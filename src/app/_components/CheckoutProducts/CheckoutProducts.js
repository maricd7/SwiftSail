'use client'
import React, { useContext, useEffect, useState } from "react";

export const CheckoutProducts = ({cart, total}) => {
  console.log(cart)

  return (
    <div className='w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 '>
      <h4 className="font-semibold">Products</h4>
      <ul>
        {cart.map((product) => (
       
          <li key={product.product_id} className="flex justify-between">
            <span>{product.name}</span>
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

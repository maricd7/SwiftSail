'use client'
import React, { useContext, useEffect, useState } from "react";
import { CheckoutProduct } from "./CheckoutProduct/CheckoutProduct";
import { TotalPrice } from "./TotalPrice";

export const CheckoutProducts = ({cart}) => {
  const [orderTotal,setOrderTotal] = useState(0)
  
  useEffect(()=>{
    let orderTotalSum = 0;
    cart.forEach(product=>{
      orderTotalSum += product.quantity*product.price
    })
    setOrderTotal(orderTotalSum)
  },[cart])


  return (
    <div className='w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 '>
      <h4 className="font-semibold text-2xl mb-8">Review your Products</h4>
      <CheckoutProduct cart={cart}/>
      <TotalPrice orderTotal={orderTotal}/>
    </div>
  );
};

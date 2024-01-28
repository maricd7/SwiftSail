'use client'
import React, { useState,useEffect } from 'react'
import { CheckoutForm } from '../_components/Form'
import { CheckoutProducts } from '../_components/CheckoutProducts'
import { useProductContext } from '../contexts/CartContext'

const Checkout = () => {
  const [cart,setCart] = useState([])
  const[total,setTotal] = useState(null);
  const {quantity} =  useProductContext()
  //total setter
  useEffect(() => {
    let sum = 0;
    cart.forEach((product) => {
      const priceForSum = product.price
      sum += parseFloat(priceForSum);
    });
    console.log(sum)
    setTotal(sum);
  }, [cart]);

  useEffect(()=>{
      setCart(JSON.parse(localStorage.getItem('cart')))
  },[])

  return (
    <div className='w-full h-cover flex items-start justify-center my-8 gap-8'>
      <CheckoutForm cart={cart} total_amount={total} quantity={quantity}/>
      <CheckoutProducts cart={cart} total={total}/>
    </div>
  )
}

export default Checkout
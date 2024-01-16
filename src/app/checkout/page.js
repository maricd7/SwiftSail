'use client'
import React, { useState,useEffect } from 'react'
import { CheckoutForm } from '../_components/Form'
import { CheckoutProducts } from '../_components/CheckoutProducts'

const Checkout = () => {
  const [cart,setCart] = useState([])
  useEffect(()=>{
      setCart(JSON.parse(localStorage.getItem('cart')))
  },[])

  return (
    <div className='w-full h-cover flex items-start justify-center my-8 gap-8'>
      <CheckoutForm cart={cart}/>
      <CheckoutProducts cart={cart}/>
    </div>
  )
}

export default Checkout
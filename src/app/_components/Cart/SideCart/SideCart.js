'use client'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { useProductContext } from '@/app/contexts/CartContext';

export const SideCart = ({toggleCart}) => {
const {cart} = useProductContext()
const [cartItems,setCartItems] = useState([])

console.log(cart, 'setter')

useEffect(()=>{
  setCartItems(cart)
},[cart])


  return (
    <div>
     <div className='h-full w-1/4 bg-white fixed right-0 z-40 mx-0 my-0 p-4'>
      <div className='w-full flex justify-end '><Icon className='cursor-pointer' icon="carbon:close" onClick={toggleCart} color="black" width="40" height="40"/>
      {cart.map(item=>{
        <h2>{item.name}</h2>
      })}
      </div>
     </div>
    </div>
)}
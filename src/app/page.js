'use client'
import Image from 'next/image'
import { Nav, Products } from './_components'
import { SideCart } from './_components/Cart'
import { useState } from 'react'

export default function Home() {
  const [cart,setCart] = useState(false);
  function toggleCart(){
    setCart(!cart)
    console.log('cart', cart)
  }
  return (
   <div>
    {cart && <SideCart toggleCart={toggleCart}/>}
    <Nav toggleCart={toggleCart}/>
    <Products/>
   </div>
  )
}

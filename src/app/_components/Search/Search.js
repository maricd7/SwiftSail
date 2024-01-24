'use client'
import { useProductContext } from '@/app/contexts/CartContext'
import React from 'react'

export const Search = () => {
  const {searchProducts} = useProductContext()


  return (
    <div>
        <input onChange={(e)=>{
         searchProducts(e)
        }} className='border-2 border-slate-950 rounded-lg px-8 py-4' type='text' placeholder='Search products'/>
    </div>
  )
}

import React from 'react'
import { ProductContextProvider, useProductContext } from '@/app/contexts/CartContext'

export const CartCounter = () => {
    let {cartCounter} = useProductContext();
    console.log('this is cart counter', cartCounter);
  return (
     <div className='rounded-full bg-red-500 p-2 w-8 h-8 flex items-center justify-center absolute right-0 top-0'>{cartCounter}</div>
  )}

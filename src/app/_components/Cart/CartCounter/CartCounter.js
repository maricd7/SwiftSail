import React from 'react'
import { ProductContextProvider, useProductContext } from '@/app/contexts/ProductsContext'

export const CartCounter = () => {
    let {cartCounter} = useProductContext();
  return (
     <div className='rounded-full bg-red-500  w-6 h-6 flex items-center justify-center absolute -right-2 -top-4 text-md text-white'>{cartCounter}</div>
  )}

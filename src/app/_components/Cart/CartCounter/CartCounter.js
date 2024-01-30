import React from 'react'
import { ProductContextProvider, useProductContext } from '@/app/contexts/ProductsContext'

export const CartCounter = () => {
    let {cartCounter} = useProductContext();
  return (
     <div className='rounded-full bg-red-500  w-6 h-6 flex items-center justify-center absolute right-0 top-1 text-sm'>{cartCounter}</div>
  )}

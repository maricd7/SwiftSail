import React from 'react'
import { ProductContextProvider, useProductContext } from '@/app/contexts/CartContext'

export const CartCounter = () => {
    let {cartCounter} = useProductContext();
    console.log('this is cart counter', cartCounter);
  return (
    <div>CartCounter</div>
  )
}

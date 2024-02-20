'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import { CartCounter } from '../CartCounter'

function CartIcon({toggleCart}) {
  return (
    <div className='fixed right-8 bottom-8 p-4 bg-orange-500 rounded-full hover:animate-pulse'>
        <Icon onClick={toggleCart}  icon="carbon:shopping-cart" color="white" width="40" height="40" className='cursor-pointer'/>
        <CartCounter/>
    </div>
  )
}

export default CartIcon
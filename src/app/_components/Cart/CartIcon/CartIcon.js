'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import { CartCounter } from '../CartCounter'

function CartIcon({toggleCart}) {
  return (
    <div className='fixed md:right-8 bottom-8 right-4   md:p-4 p-2 bg-orange-500 rounded-full hover:animate-pulse'>
        <Icon onClick={toggleCart}  icon="carbon:shopping-cart" color="white" width="40" height="40" className='cursor-pointer md:w-40 w-10 h-10'/>
        <CartCounter/>
    </div>
  )
}

export default CartIcon
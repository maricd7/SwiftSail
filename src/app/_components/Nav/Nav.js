'use client'
import React from 'react'
import { Logo } from '../Logo'
import { Icon } from '@iconify/react'
import { CartCounter } from '../Cart/CartCounter'

export const Nav = ({toggleCart}) => {
  return (
    <nav className='p-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0'>
        <CartCounter/>
        <Logo/>
        <Icon onClick={toggleCart} icon="carbon:shopping-cart" color="black" width="40" height="40" className='cursor-pointer'/>
    </nav>
  )
}

'use client'
import React from 'react'
import { Logo } from '../Logo'
import { Icon } from '@iconify/react'
import { CartCounter } from '../Cart/CartCounter'
import { Search } from '../Search'

export const Nav = ({toggleCart}) => {
  return (
    <nav className='p-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0'>
        <CartCounter/>
        <Logo/>
        <div className='flex gap-8 items-center'>
        <Search/>
        <Icon onClick={toggleCart} icon="carbon:shopping-cart" color="black" width="40" height="40" className='cursor-pointer'/>
        </div>
    </nav>
  )
}

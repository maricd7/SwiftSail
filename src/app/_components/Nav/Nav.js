'use client'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import { Icon } from '@iconify/react'
import { CartCounter } from '../Cart/CartCounter'
import { Search } from '../Search'
import { SideCart } from '../Cart'
import { useProductContext } from '@/app/contexts/ProductsContext'
import { NavCategories } from '../Categories'

export const Nav = ({toggleCart}) => {
  return (
    <nav className='p-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed'>
        <CartCounter/>
        <div className='flex gap-4 items-center'>
          <Logo/>
          <NavCategories/>
        </div>
        <Search/>
        <Icon onClick={toggleCart}  icon="carbon:shopping-cart" color="black" width="40" height="40" className='cursor-pointer'/>
    </nav>
  )
}

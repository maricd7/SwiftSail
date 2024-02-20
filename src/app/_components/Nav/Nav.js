'use client'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import { Icon } from '@iconify/react'
import { CartCounter } from '../Cart/CartCounter'
import { Search } from '../Search'
import { SideCart } from '../Cart'
import { NavCategories } from '../Categories'

export const Nav = () => {
  return (
    <nav className='p-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed'>
        <div className='flex gap-4 items-center'>
          <Logo/>
          <NavCategories/>
        </div>
        <Search/>
    </nav>
  )
}


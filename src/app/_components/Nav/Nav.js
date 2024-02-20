'use client'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import { NavCategories } from '../Categories'
import { ProductContextProvider } from '@/app/contexts/ProductsContext'

export const Nav = () => {
  return (
    <ProductContextProvider>
    <nav className='p-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed'>
        <div className='flex gap-4 items-center'>
          <Logo/>
          <NavCategories/>
        </div>
    </nav>
    </ProductContextProvider>
  )
}


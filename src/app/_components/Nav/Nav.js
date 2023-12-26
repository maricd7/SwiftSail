'use client'
import React from 'react'
import { Logo } from '../Logo'
import { Icon } from '@iconify/react'

export const Nav = ({toggleCart}) => {
  return (
    <nav className='p-4 flex w-full justify-between items-center'>
        <Logo/>
        <Icon onClick={toggleCart} icon="carbon:shopping-cart" color="black" width="40" height="40" className='cursor-pointer'/>
    </nav>
  )
}

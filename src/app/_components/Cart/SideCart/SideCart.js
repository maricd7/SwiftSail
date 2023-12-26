'use client'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export const SideCart = ({toggleCart}) => {

  
  return (
    <div>
     <div className='h-full w-1/4 bg-white fixed right-0 z-40 mx-0 my-0 p-4'>
      <div className='w-full flex justify-end '><Icon className='cursor-pointer' icon="carbon:close" onClick={toggleCart} color="black" width="40" height="40"/></div>
     </div>
    </div>
)}
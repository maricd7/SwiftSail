'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import { Icon } from '@iconify/react'
import React from 'react'

export const Search = () => {
  const {searchProducts} = useProductContext()
  return (
    <div className='relative mt-4'>
       <Icon icon="carbon:search" width="24" height="24" style={{color:'#000'}} className='absolute left-6 top-1/3' />
        <input onChange={(e)=>{
         searchProducts(e)
        }} className='rounded-full px-16 py-4 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]' type='text' placeholder='Search products'/>
    </div>
  )
}

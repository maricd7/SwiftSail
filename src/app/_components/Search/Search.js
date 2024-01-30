'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import { Icon } from '@iconify/react'
import React from 'react'

export const Search = () => {
  const {searchProducts} = useProductContext()
  return (
    <div className='w-1/2 relative'>
       <Icon icon="carbon:search" width="24" height="24" style={{color:'#000'}} className='absolute left-6 top-1/3' />
        <input onChange={(e)=>{
         searchProducts(e)
        }} className='border-2 border-slate-950 rounded-lg px-8 py-4 w-full ml-4' type='text' placeholder='Search products'/>
    </div>
  )
}

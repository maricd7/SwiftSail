'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import { Heading } from '../common';
import { Category } from './Category';

export const Categories = () => {
    const {products} = useProductContext()
  return (
    <div className='mx-72 mt-10'>
         <Heading text='Browse products by category'/>
         <ul className='flex gap-4 mt-10'>
         {products.map((product, index) => (
          <Category  key={index} category={product.category}/>
        ))}
         </ul>
    </div>
  )
}

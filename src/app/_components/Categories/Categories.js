'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import { Heading } from '../common';
import { Category } from './Category';
import { Search } from '../Search';

export const Categories = () => {
  const {categories} = useProductContext()
  
  return (
    <div className=' mt-10'>
         <Heading text='Browse products by category'/>
         <ul className='flex gap-4 mt-4'>
         {categories.map((category, index) => (
          <Category  key={index} category={category}/>
        ))}
         </ul>
         <Search/>
    </div>
  )
}

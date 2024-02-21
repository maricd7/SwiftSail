'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import { Heading } from '../common';
import { Category } from './Category';
import { Icon } from '@iconify/react';

export const NavCategories = () => {
    const [dropDownCategories, setDropDownCategories] = useState(false)
    const {categories} = useProductContext()

    function toggleDropDown(){
        setDropDownCategories(!dropDownCategories)
    }
  return (
    <div className='relative px-8 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg cursor-pointer flex justify-between items-center gap-4' onClick={toggleDropDown}>
         <span className='text-white' >Categories</span>
         <Icon icon="carbon:arrow-down" width="24" height="24"  style={{color:'#fff'}} />
         {dropDownCategories && 
             <ul className='flex flex-col gap-4 mt-10 absolute bg-white p-2 top-0 rounded-lg left-0 w-full'>
             {categories.map((category, index) => (
              <Category  key={index} category={category}/>
            ))}
             </ul>
    }
    </div>
  )
}

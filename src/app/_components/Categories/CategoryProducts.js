'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React from 'react'

export default function CategoryProducts() 
{  
    const {products} = useProductContext()
    console.log(products)
    
    return (
    <div>CategoryProducts</div>
  )
}

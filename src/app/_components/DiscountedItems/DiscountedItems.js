'use client'
import React, { useEffect, useState } from 'react'
import { ProductBox } from '../Products/ProductBox'
import { useProductContext } from '@/app/contexts/ProductsContext';

export default function DiscountedItems() {
    const {products} = useProductContext()
    const [discountedItems, setDiscountedItems] = useState([]);
    
    useEffect(()=>{
      let productsDiscount  = products.filter(product=>{
        return product.discount > 1; 
      })
      setDiscountedItems(productsDiscount )
    },[products])

  return (
    <div className="flex flex-wrap gap-4  justify-start items-center h-full">
    {discountedItems.map((item, index) => (
      <ProductBox key={index} product={item} />
    ))}
  </div>
  )
}

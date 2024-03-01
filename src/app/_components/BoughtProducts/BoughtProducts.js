'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function BoughtProducts() {
    const {products,boughtProducts} = useProductContext()
    const [filteredProducts,setFilteredProducts]= useState([])
    useEffect(()=>{
        setFilteredProducts(products.filter(obj => boughtProducts.includes(obj.id)));
    },[products,boughtProducts])
    console.log(filteredProducts)
  return (
    <div className="bg-white rounded-lg p-8 shadow-md flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Bought Products</h2>
        <ul className='flex flex-col '>
        {filteredProducts.map((product, index) => (
        <li key={index} className='flex gap-4 items-center'>
            <Image src={product.image} width={64} height={64} alt={product.name}/>
            <p>{product.name}</p>
            <p>${product.price}</p>
        </li>
    ))}
        </ul>
  </div>
  )
}

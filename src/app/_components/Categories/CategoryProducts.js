'use client'
import { useProductContext } from '@/app/contexts/ProductsContext';
import React from 'react';
import { useParams } from 'next/navigation'
import { ProductBox } from '../Products/ProductBox';

export default function CategoryProducts() {
  const params = useParams()

  const { products } = useProductContext();
  
  
  
  return (
    <div>
      {products.map((product,index)=>{
        if(product.category === params.name){
          console.log(product);
          <ProductBox key={index} product={product}/>
        }else{
          <></>
        }
      }
      )}
    </div>
  );}
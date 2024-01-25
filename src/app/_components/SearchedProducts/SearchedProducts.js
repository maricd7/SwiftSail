import React from 'react'
import { ProductBox } from '../Products/ProductBox'

export const SearchedProducts = () => {
   const filteredProducts = localStorage.getItem
  return (
    <div>
        {filteredProducts.map((product,index)=>{
             <ProductBox product={product} key={index} />
        })}
    </div>
  )
}

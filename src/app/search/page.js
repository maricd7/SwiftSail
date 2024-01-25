'use client'
import React from 'react'
import { ProductContextProvider } from '../contexts/CartContext'
import { SearchedProducts } from '../_components/SearchedProducts'

function searchProducts() {
  return (
    <ProductContextProvider>
    <div className='mt-24'>
        <SearchedProducts/>
    </div>
    </ProductContextProvider>
  )
}

export default searchProducts
'use client'
import React from 'react'
import { ProductContextProvider } from '../contexts/CartContext'

function searchProducts() {
  return (
    <ProductContextProvider>
    <div className='mt-24'>

    </div>
    </ProductContextProvider>
  )
}

export default searchProducts
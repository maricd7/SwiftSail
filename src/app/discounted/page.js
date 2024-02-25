'use client'
import React from 'react'
import { ProductContextProvider } from '../contexts/ProductsContext'
import DiscountedItems from '../_components/DiscountedItems/DiscountedItems'
import { Heading } from '../_components'

function DisocuntedProducts() {
  return (
   <div className='mx-72'>
     <ProductContextProvider>
        <Heading text='Discounted Products'/>
        <DiscountedItems/>
    </ProductContextProvider>
   </div>
  )
}

export default DisocuntedProducts
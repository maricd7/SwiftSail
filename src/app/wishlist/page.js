'use client'
import React from 'react'
import WishListItems from '../_components/WishListItems/WishListItems'
import { Heading, Nav } from '../_components'
import { ProductContextProvider } from '../contexts/ProductsContext'

function Wishlist() {
  return (
    <div className='h-full'>
      <Nav/>
      <Heading text='Your wishlist'/>
      <ProductContextProvider>
      <WishListItems/>
      </ProductContextProvider>
    </div>
  )
}

export default Wishlist
import React from 'react'
import WishListItems from '../_components/WishListItems/WishListItems'
import { Heading } from '../_components'

function Wishlist() {
  return (
    <div className='h-full'>
      <Heading text='Your wishlist'/>
      <WishListItems/>
    </div>
  )
}

export default Wishlist
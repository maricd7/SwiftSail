'use client'
import { Heading, Nav } from '@/app/_components'
import { SideCart } from '@/app/_components/Cart'
import CartIcon from '@/app/_components/Cart/CartIcon/CartIcon'
import CategoryProducts from '@/app/_components/Categories/CategoryProducts'
import { ProductContextProvider } from '@/app/contexts/ProductsContext'
import React, { useState } from 'react'

export default function CategoryPage() {
  const [cartOpened, setCartOpened] = useState(false);
  function toggleCart() {
    setCartOpened(!cartOpened);
  }
  
  return (
    <div>
      <ProductContextProvider>
        <Nav/>
        <CategoryProducts/>
        {cartOpened && <SideCart toggleCart={toggleCart} />}
       <CartIcon toggleCart={toggleCart}/>
      </ProductContextProvider>
    </div>
  )
}

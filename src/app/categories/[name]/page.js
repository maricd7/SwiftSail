'use client'
import { Heading } from '@/app/_components'
import CategoryProducts from '@/app/_components/Categories/CategoryProducts'
import { ProductContextProvider } from '@/app/contexts/ProductsContext'
import React from 'react'

export default function CategoryPage() {
  return (
    <div>
      <ProductContextProvider>
        <CategoryProducts/>
      </ProductContextProvider>
    </div>
  )
}

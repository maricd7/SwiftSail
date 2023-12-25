import React from 'react'
import { CtaButton } from '../../common'

export const ProductBox = ({product}) => {
  console.log(product)
  const productRef = '/products/' + product.id ; 
  console.log(productRef)
  return (
    <a href='/products/1' className='rounded-xl max-w-sm   mx-auto mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer hover:border-2 border-orange-400'>
      <img src={product.images[0]} className='max-w-96 h-96 rounded-lg w-96'/>
      <h2 className='mt-4'>{product.title}</h2>
      <h1 className='text-2xl font-bold mt-4'>${product.price}</h1>
      <CtaButton text='Add to Cart'/>
    </a>
  )
}

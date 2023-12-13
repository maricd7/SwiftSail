import React from 'react'

export const ProductBox = ({product}) => {
  return (
    <div className='rounded-xl max-w-sm  mx-auto mt-8 bg-white rounded overflow-hidden shadow-lg p-4'>
      <img src={product.images[0]} className='max-w-full h-96 rounded-lg'/>
      <h2>{product.title}</h2>
      <h1>${product.price}</h1>
    </div>
  )
}

import React from 'react'

export const CategoryTag = ({product}) => {
  return (
   <span className='px-4 py-2 bg-gray-200 rounded-lg w-fit text-xs'>{product.category}</span>
  )
}

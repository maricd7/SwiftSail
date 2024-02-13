import React from 'react'

export default function ProductDiscount({discount}) {
  return (
    <span className='absolute top-0 right-0 p-2 bg-red-700 text-white rounded-full'>
        {discount}%
    </span>
  )
}

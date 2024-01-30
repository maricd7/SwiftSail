import Link from 'next/link'
import React from 'react'

export const Category = ({category}) => {
  const categoryRef = "/categories/" + category;
  return (
    <Link  href={{ pathname: categoryRef}}>
      <div className='bg-gray-200 px-8 py-2 rounded-full'>
        {category}
      </div>
    </Link>
  )
}

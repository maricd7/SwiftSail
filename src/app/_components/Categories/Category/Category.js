import Link from 'next/link'
import React from 'react'

export const Category = ({category}) => {
  const categoryRef = "/categories/" + category;
  return (
    <Link  href={{ pathname: categoryRef , query:{category}}} >
      <div className='bg-gray-200 md:px-8 px-4 py-2 rounded-full'>
        {category}
      </div>
    </Link>
  )
}

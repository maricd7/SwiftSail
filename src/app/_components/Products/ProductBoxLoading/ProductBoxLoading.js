import React from 'react'

export const ProductBoxLoading = () => {
  return (
    <div className="rounded-xl max-w-xs mt-8 bg-white rounded overflow-hidden shadow-lg p-4 cursor-pointer  flex flex-col justify-center items-center border-2 border-gray-300 hover:scale-105">
      <div>Image</div>
      <h2 className="mt-4 mb-2 w-32 text-xl">Product</h2>
      <span>Tag</span>
      <p className="text-gray-400 mt-2 max-w-3/4">Product</p>
      <h1 className="text-2xl font-bold mt-4">Product</h1>
    <button>Add To Cart</button>
  </div>
  )
}

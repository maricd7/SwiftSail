import React from 'react'

export const CheckoutProduct = ({cart}) => {
  return (
    <ul>
        {cart.map((product) => (
          <li key={product.id} className="flex justify-between border-b border-gray-200 mb-2 pb-2">
            <span className='w-full'>{product.name}</span>
            <span  className='w-full text-center'>${product.price}</span>
            <div  className='w-full flex gap-2 justify-end'>
                <span >${product.quantity*product.price}</span>
                {product.quantity ? <span>x{product.quantity}</span> : <span>x1</span>}
            </div>
          </li>
        ))}
      </ul>
  )
}

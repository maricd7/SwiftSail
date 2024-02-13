import React from 'react';

export default function ProductPrice({ price, discount }) {
  return (
    <div className='flex gap-2 items-center'>
      {discount ? (
        <>
          <span className="mt-2 text-xl font-bold">
            ${price * (1 - discount / 100)}
          </span>
          <p className="mt-2 text-xl text-gray-500 line-through">
            ${price}
          </p>
        </>
      ) : (
        <p className="mt-2 text-xl font-bold">
          ${price}
        </p>
      )}
    </div>
  );
}
'use client'
import React from 'react';
import { Icon } from '@iconify/react';

export const AddedToWishList = () => {
  return (
    <div className='flex flex-col fixed md:top-20 md:right-72 top-16 right-4 bg-white md:p-8 p-4 rounded-lg shadow-lg border-l-8 border-red-400	'>
      <div className='flex  items-center gap-8'>
        <Icon icon="ph:heart-straight-fill" width="24" height="24"  style={{color: '#FF6961'}} />
        <div className='flex flex-col gap-2 '>
          <span className='md:text-xl text-md font-bold'>Product added to wishlist!</span>
          <p className='md:text-lg text-sm'>View your favourite products on wishlist page.</p>
        </div>
      </div>
    </div>
  );
};
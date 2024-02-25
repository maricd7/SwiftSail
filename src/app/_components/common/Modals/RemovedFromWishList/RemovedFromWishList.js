'use client'
import React from 'react';
import { Icon } from '@iconify/react';

export const RemovedFromWishList = () => {
  return (
    <div className='flex flex-col fixed top-20 right-72 bg-white p-8 rounded-lg shadow-lg'>
      <div className='flex  items-center gap-8'>
        <Icon icon="ph:heart-break-fill" width="24" height="24"  style={{color: 'gray'}} />
        <div className='flex flex-col gap-2 '>
          <span className='text-xl font-bold'>Product removed from wishlist!</span>
          <p>View your favourite products on wishlist page.</p>
        </div>
      </div>
    </div>
  );
};
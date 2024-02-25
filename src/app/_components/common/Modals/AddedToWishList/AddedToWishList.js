'use client'
import React from 'react';
import { CtaButton } from '../../CtaButton';
import { Icon } from '@iconify/react';

export const AddedToWishList = () => {
  return (
    <div className='flex flex-col fixed top-20 right-72 bg-white p-8 rounded-lg shadow-lg border-l-8 border-red-400	'>
      <div className='flex  items-center gap-8'>
        <Icon icon="ph:heart-straight-fill" width="24" height="24"  style={{color: '#FF6961'}} />
        <div className='flex flex-col gap-2 '>
          <span className='text-xl font-bold'>Product added to wishlist!</span>
          <p>View your favourite products on wishlist page.</p>
        </div>
      </div>
    </div>
  );
};
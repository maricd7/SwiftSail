'use client'
import React from 'react';
import { CtaButton } from '../../CtaButton';
import { Icon } from '@iconify/react';

export const AddedToCart = () => {
  return (
    <div className='flex flex-col items-center justify-between fixed p-4 w-96 h-96 rounded-lg bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 border-2 border-gray-200'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <Icon icon="bi:cart-check" width="80" height="80"  style={{color: '#000'}} />
        <div className='flex flex-col gap-2 text-center justify-center items-center'>
          <span className='text-2xl font-bold'>Product added to cart!</span>
          <p>Finish your purchase on checkout page.</p>
        </div>
      </div>
      <CtaButton onClick={()=>{window.location.href='/checkout'}} text='Go to checkout' />
    </div>
  );
};
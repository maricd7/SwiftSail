import React from 'react';
import { CtaButton } from '../../CtaButton';

export const AddedToCart = () => {
  return (
    <div className='absolute p-4 w-96 h-96 rounded-lg bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <span>Product added to cart!</span>
      <CtaButton onClick={()=>{window.location.href='/checkout'}} text='Go to checkout' />
    </div>
  );
};
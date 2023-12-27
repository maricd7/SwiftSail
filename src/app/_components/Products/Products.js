'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ProductBox } from './ProductBox';
import { Icon } from '@iconify/react';
import { useProductContext } from '@/app/contexts/CartContext';

export const Products = () => {
  const {products}=  useProductContext()

  return (
    <div className='z-10'>
      <ul className='flex flex-wrap gap-4 w-full justify-center align-center mx-auto'>
        {products.map((product, index) => (
            <ProductBox  product={product} key={index}/>
        ))}
      </ul>
    </div>
  );
};
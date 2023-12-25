'use client';
import React, { useEffect, useState } from 'react';
import { ProductBox } from './ProductBox';
import { Icon } from '@iconify/react';

export const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const URL = 'https://dummyjson.com/products';
        const res = await fetch(URL);
        const products = await res.json();
        setProductsData(products.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ul className='flex flex-wrap gap-4 w-full justify-center align-center mx-auto'>
        {productsData.map((product, index) => (
            <ProductBox product={product} key={index}/>
        ))}
      </ul>
    </div>
  );
};
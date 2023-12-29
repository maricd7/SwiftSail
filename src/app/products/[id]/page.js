'use client'
import { TopBox } from "@/app/_components";
import React, { useContext } from "react";
import { useSearchParams } from 'next/navigation'

function ProductPage({ params}) {
  const searchParams = useSearchParams()
  const productName = searchParams.get('title')
  console.log(productName, 'product name')


  return (
    <div>
      <TopBox/>
    </div>
  );
}
export default ProductPage;

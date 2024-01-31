'use client'
import { TopBox } from "@/app/_components";
import React, { useContext } from "react";
import { useSearchParams } from 'next/navigation'

function ProductPage({ params}) {
  const searchParams = useSearchParams()
 
  return (
    <div className="mx-auto my-24 flex justify-center h-screen	">
      <TopBox productparams = {searchParams}/>
    </div>
  );
}
export default ProductPage;

import React from "react";
import { Heading } from "../common";
import Image from "next/image";

export const ShopHeader = () => {
  return (
    <div className="mt-24 flex mx-72 gap-4 w-full ">
      <div className="rounded-lg bg-orange-200 w-1/2 h-96 p-8 justify-center items-center flex ">
        <Heading text="MORE DEALS UP TO 50% DISCOUNT" />
        <Image
          alt="discount product"
          src="/featured-product.png"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="rounded-lg bg-red-200 w-1/2 h-full"></div>
        <div className="rounded-lg bg-blue-200 w-1/2 h-full"></div>
      </div>
    </div>
  );
};

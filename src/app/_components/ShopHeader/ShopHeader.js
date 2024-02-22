import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ShopHeader = () => {
  return (
    <div className="mt-24 flex mx-72 gap-4 w-full ">
      <div className="rounded-lg bg-orange-200 w-1/2 p-8 justify-center items-center flex ">
        <div className="gap-2 flex flex-col ">
          <h2 className="font-bold text-2xl">MORE DEALS UP TO 50% DISCOUNT</h2>
          <p className="font-semibold text-slate-700">
            Explore products with discount to save your money.
          </p>
          <Link
            href="/discounted"
            className="rounded-full text-white bg-orange-500 py-2 px-8 w-fit"
          >
            Explore
          </Link>
        </div>
        <Image
          alt="discount product"
          src="/static/featured-product.png"
          width={250}
          height={250}
          className="right-40"
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="rounded-lg bg-red-200 w-1/2 h-full p-4 justify-center items-center flex">
          <div className="gap-2 flex flex-col">
            <h2 className="font-bold text-2xl">VIEW CHEAPEST PRODUCTS TODAY</h2>
            <Link
              href="/discounted"
              className="rounded-full text-white bg-red-500 py-2 px-8 w-fit"
            >
              Explore
            </Link>
          </div>
          <Image
            alt="discount product"
            src="/static/featured-product.png"
            width={250}
            height={250}
            className="right-40"
          />
        </div>
        <div className="rounded-lg bg-blue-200 w-1/2 h-full p-4 justify-center items-center flex">
          <div className="gap-2 flex flex-col">
            <h2 className="font-bold text-2xl">VIEW CHEAPEST PRODUCTS TODAY</h2>
            <Link
              href="/discounted"
              className="rounded-full text-white bg-blue-500 py-2 px-8 w-fit"
            >
              Explore
            </Link>
          </div>
          <Image
            alt="discount product"
            src="/static/featured-product.png"
            width={250}
            height={250}
            className="right-40"
          />
        </div>
      </div>
    </div>
  );
};

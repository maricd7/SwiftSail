import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BigHeaderSection() {
  return (
    <div className="rounded-lg bg-orange-200 w-full p-8 justify-center items-center flex sm:flex-row flex-col">
      <div className="gap-2 flex flex-col ">
        <h2 className="font-bold sm:text-2xl text-xl">
          MORE DEALS UP TO 50% DISCOUNT
        </h2>
        <p className="font-semibold text-slate-700 sm:text-xl">
          Explore products with discount to save your money.
        </p>
        <Link
          href="/discounted"
          className="rounded-full text-white bg-orange-500 py-2 px-8 sm:w-fit w-full text-center"
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
  );
}

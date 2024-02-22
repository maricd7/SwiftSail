import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallerHeaderSection from "./SmallerHeaderSection";
import BigHeaderSection from "./BigHeaderSection";

export const ShopHeader = () => {
  return (
    <div className="mt-24 flex mx-72 gap-4 w-full ">
      <BigHeaderSection/>
      <div className="flex flex-col w-full gap-4">
        <SmallerHeaderSection text='VIEW CHEAPEST PRODUCTS TODAY' link='/discounted' bg='rgb(254 202 202)' btnClr='rgb(239 68 68)'/>
        <SmallerHeaderSection text='BEST SELLING PHONES' link='/categories/phone' bg='rgb(186 230 253)' btnClr='rgb(2 132 199)'/>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallerHeaderSection from "./SmallerHeaderSection";
import BigHeaderSection from "./BigHeaderSection";

export const ShopHeader = () => {
  return (
    <div className="mt-24 flex xl:flex-row flex-col gap-4 w-full ">
      <BigHeaderSection />
      <div className="flex flex-col w-full gap-4">
        <SmallerHeaderSection
          text="VIEW CHEAPEST PRODUCTS TODAY"
          link="/discounted"
          bg="rgb(254 202 202)"
          btnClr="rgb(239 68 68)"
          image="/static/razer-de.png"
          par="Explore today's lowest-priced products for amazing savings on essential items!"
        />
        <SmallerHeaderSection
          text="BEST SELLING PHONES"
          link="/categories/Phone"
          bg="rgb(186 230 253)"
          btnClr="rgb(2 132 199)"
          image="/static/xiaomi.png"
          par="Discover the hottest-selling phones that everyone's raving about!"
        />
      </div>
    </div>
  );
};

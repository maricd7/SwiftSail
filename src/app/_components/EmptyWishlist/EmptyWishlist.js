import React from "react";
import { Heading } from "../common";
import Image from "next/image";

const EmptyWishlist = () => {
  return (
    <div className="flex justify-center items-center  gap-8 flex-col  h-screen">
      <div className="flex flex-col gap-2">
        <Heading text="Your Wishlist is currently empty" />
        <p>
          Add items you would like to buy in the future,dont forget what you
          liked.
        </p>
      </div>
      <Image
        src="/static/emptywishlist.svg"
        width={320}
        height={320}
        alt="empty wishlist"
      />
    </div>
  );
};

export default EmptyWishlist;

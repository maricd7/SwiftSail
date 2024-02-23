"use client";
import React, { useState } from "react";
import { Logo } from "../Logo";
import { NavCategories } from "../Categories";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const Nav = () => {
  return (
    <ProductContextProvider>
      <nav className="px-72 py-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed">
        <div className="flex gap-4 items-center w-full justify-between">
          <Logo />
          {/* <NavCategories/> */}
          <Link href="wishlist" className="flex items-center">
            <Icon
              icon="ph:heart-straight-fill"
              width="24"
              height="24"
              style={{ color: '#FF6961'}}
            />
            Wishlist
          </Link>
        </div>
      </nav>
    </ProductContextProvider>
  );
};

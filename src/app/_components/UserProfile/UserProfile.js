"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";
import { Heading } from "../common";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import BoughtProducts from "../BoughtProducts/BoughtProducts";
import { useRouter } from "next/navigation";
import WishListItems from "../WishListItems/WishListItems";

export default function UserProfile() {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function getUserInfo() {
      const { data: user, error } = await supabase.auth.getUser();
      setUserEmail(user.user?.email);
      if (!user.user) {
        router.push("/login");
      }
    }
    getUserInfo();
  }, []);
  return (
    <ProductContextProvider>
      <div className="mt-16 lg:mx-72 mx-4">
        <Heading text={userEmail} />
        <div className="mt-24 flex flex-col  flex-col gap-8">
          <BoughtProducts />
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold">Your Wishlist</h2>
            <WishListItems />
          </div>
        </div>
      </div>
    </ProductContextProvider>
  );
}

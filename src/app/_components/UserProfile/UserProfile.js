"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";
import { Heading } from "../common";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import BoughtProducts from "../BoughtProducts/BoughtProducts";

export default function UserProfile() {
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    async function getUserInfo() {
      const { data: user, error } = await supabase.auth.getUser();
      setUserEmail(user.user?.email);
    }
    getUserInfo();
  }, []);
  return (
    <ProductContextProvider>
    <div className="mt-24">
      <Heading text={userEmail} />
      <button className="text-red-500 mt-2 underline" onClick={()=>signOut()}>Sign Out</button>
      <div className="mt-24 flex gap-8">
        <BoughtProducts/>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold">Your Wishlist</h2>
        </div>
      </div>
    </div>
   </ProductContextProvider>
  );
}

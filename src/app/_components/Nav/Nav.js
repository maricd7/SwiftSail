"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import supabase from "@/app/supabase";
import { useRouter } from "next/navigation";

export const Nav = () => {
  const [login, setLogin] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function checkUser() {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      //check if user and user properties exists
      if (user && user.user?.id) {
        setLogin(false);
      } else {
        setLogin(true);
      }
      console.log(user);
    }
    checkUser();
  }, []);

  //logout user
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log("succes sing out");
    if (error) {
      console.log("error signing out");
    }
    setLogin(true);
  }
  return (
    <ProductContextProvider>
      <nav className="px-72 py-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed">
        <div className="flex gap-4 items-center w-full justify-between">
          <Logo />
          <div className="gap-8 flex items-center">
            <Link href="/wishlist" className="flex items-center gap-2">
              <Icon
                icon="ph:heart-straight-fill"
                width="24"
                height="24"
                style={{ color: "#FF6961" }}
              />
              Wishlist
            </Link>
            {login ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/profile" className="flex gap-4 items-center">
                <Icon
                  className="cursor-pointer"
                  icon="carbon:user-avatar"
                  width="32"
                  height="32"
                  style={{ color: "#000" }}
                />
                  <Icon
                  className="cursor-pointer"
                  icon="carbon:logout"
                  width="32"
                  height="32"
                  style={{ color: "#000" }}
                  onClick={()=>signOut()}
                />
              </Link>
              
            )}
          </div>
        </div>
      </nav>
    </ProductContextProvider>
  );
};

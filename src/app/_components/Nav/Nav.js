"use client";
import React, { useState,useEffect } from "react";
import { Logo } from "../Logo";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import supabase from "@/app/supabase";
import { useRouter } from "next/navigation";

export const Nav = () => { 
  const[login,setLogin] = useState(true); 

  useEffect(() => {
    async function checkUser() {
      const { data: user } = await supabase.auth.getUser();
      if (user) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    }
    checkUser();
  }, []);

  async function signOut(){
    const { error } = await supabase.auth.signOut()
    if(error){
      console.log('error signing out')
    }
    setLogin(true)
  }
  return (
    <ProductContextProvider>
      <nav className="px-72 py-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0 fixed">
        <div className="flex gap-4 items-center w-full justify-between">
          <Logo />
          <div className="gap-8 flex">
            <Link href="/wishlist" className="flex items-center gap-2">
              <Icon
                icon="ph:heart-straight-fill"
                width="24"
                height="24"
                style={{ color: '#FF6961'}}
              />
              Wishlist
            </Link>
            {login ? <Link href='/login'>Login</Link> : <button onClick={signOut}>Logout</button>}
          </div>
        </div>
      </nav>
    </ProductContextProvider>
  );
};

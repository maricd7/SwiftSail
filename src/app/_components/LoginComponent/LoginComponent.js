'use client'
import React, { useRef, useState } from "react";
import { CtaButton, Heading, Input } from "../common";
import supabase from "@/app/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginComponent() {
    const router = useRouter()
    const emailLoginRef = useRef();
    const passwordLoginRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
      
        const email = emailLoginRef.current.value;
        const password = passwordLoginRef.current.value;
      
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        
        if (error) {
          console.error("Error signing up:", error.message);
        } else {
          console.log("User signed up successfully:", data.user);
          router.push('/')
        }
      }

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-16 max-w-lg bg-white rounded-md flex flex-col gap-2"
      >
        <Heading text="Login" />
        <h2>Login in into your swiftsail account for more features.</h2>
        <Input placeholder="Email" type="text" label="Email" ref={emailLoginRef}/>
        <Input placeholder="Password" type="password" label="Password" ref={passwordLoginRef}/>
        <CtaButton text="Login" type="submit" />
        <span className="flex gap-2 items-center justify-center mt-4">Don&rsquo;t have an account?<Link href='/register' className='text-blue-500'>Sign Up</Link></span>
      </form>
      
    </div>
  );
}

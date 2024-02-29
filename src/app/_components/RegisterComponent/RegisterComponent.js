'use client'
import React, { useRef, useState } from "react";
import { CtaButton, Heading, Input } from "../common";
import supabase from "@/app/supabase";
import Link from "next/link";

export default function RegisterComponent() {
    const emailRegisterRef = useRef();
    const passwordRegisterRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
      
        const email = emailRegisterRef.current.value;
        const password = passwordRegisterRef.current.value;
      
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
      
        if (error) {
          console.error("Error signing up:", error.message);
        } else {
          console.log("User signed up successfully:", data.user);
        }
      }

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-16 max-w-lg bg-white rounded-md flex flex-col gap-2"
      >
        <Heading text="Register" />
        <h2>Register your swiftsail account for more features.</h2>
        <Input placeholder="Email" type="text" label="Email" ref={emailRegisterRef}/>
        <Input placeholder="Password" type="password" label="Password" ref={passwordRegisterRef}/>
        <CtaButton text="Register" type="submit" />
        <span className="flex gap-2 items-center justify-center mt-4">Already have an account?<Link href='/login' className='text-blue-500'>Login</Link></span>
      </form>
      
    </div>
  );
}

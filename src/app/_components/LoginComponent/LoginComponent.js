'use client'
import React, { useRef, useState } from "react";
import { CtaButton, Heading, Input } from "../common";
import supabase from "@/app/supabase";

export default function LoginComponent() {
    const emailLoginRef = useRef();
    const passwordLoginRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
      
        const email = emailLoginRef.current.value;
        const password = passwordLoginRef.current.value;
      
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
        <Heading text="Login" />
        <h2>Login in into your swiftsail account for more features.</h2>
        <Input placeholder="Email" type="text" label="Email" ref={emailLoginRef}/>
        <Input placeholder="Password" type="password" label="Password" ref={passwordLoginRef}/>
        <CtaButton text="Login" type="submit" />
      </form>
    </div>
  );
}

"use client";
import React, { useRef } from "react";
import { CtaButton, Heading, Input } from "../common";
import Link from "next/link";
import { useAuthContext } from "@/app/contexts/AuthContext";

export default function LoginComponent() {
  const { handleLogin } = useAuthContext();
  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailLoginRef.current.value;
    const password = passwordLoginRef.current.value;
    handleLogin(email, password);
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-16 max-w-lg bg-white rounded-md flex flex-col gap-2"
      >
        <Heading text="Login" />
        <h2>Login into your swiftsail account for more features.</h2>
        <Input
          placeholder="Email"
          type="text"
          label="Email"
          ref={emailLoginRef}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          ref={passwordLoginRef}
        />
        <CtaButton text="Login" type="submit" />
        <span className="flex gap-2 items-center justify-center mt-4">
          Don&rsquo;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { CtaButton, Heading, Input } from "../common";
import supabase from "@/app/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterComponent() {
  const emailRegisterRef = useRef();
  const passwordRegisterRef = useRef();
  const confirmPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorMessageText, setErrorMessageText] = useState("");

  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRegisterRef.current.value;
    const password = passwordRegisterRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setErrorMessage(true);
      return;
    } else {
      setErrorMessage(false);
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessageText(error.message);
      console.error("Error signing up:", error.message);
    } else {
      console.log("User signed up successfully:", data.user);
      router.push("/");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-16 max-w-lg bg-white rounded-md flex flex-col gap-2"
      >
        <Heading text="Register" />
        <h2>Register your swiftsail account for more features.</h2>
        <Input
          placeholder="Email"
          type="text"
          label="Email"
          ref={emailRegisterRef}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          ref={passwordRegisterRef}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          label="Confirm Password"
          ref={confirmPasswordRef}
        />
        {errorMessage ? (
          <span className="text-red-500 text-sm">Passwords do not match!</span>
        ) : (
          <></>
        )}
        {errorMessage.length > 0 ? (
          <span className="text-red-500 text-sm">{errorMessageText}</span>
        ) : (
          <></>
        )}
        <CtaButton text="Register" type="submit" />
        <span className="flex gap-2 items-center justify-center mt-4">
          Already have an account?
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { CtaButton, Heading, Input } from "../common";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    console.log("submited");
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit()}
        className="p-16 max-w-lg bg-white rounded-md flex flex-col gap-2"
      >
        <Heading text="Login" />
        <h2>Login in into your swiftsail account for more features.</h2>
        <Input placeholder="Email" type="text" label="Email" />
        <Input placeholder="Password" type="password" label="Password" />
        <CtaButton text="Login" type="submit" />
      </form>
    </div>
  );
}

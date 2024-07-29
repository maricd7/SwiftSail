import Image from "next/image";
import React from "react";
import { CtaButton, Heading } from "../_components";
import Link from "next/link";

const ThanksPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Heading text="Thank you for your order" />
      <Image
        src="/static/heart-illustration.png"
        alt="Thanks for order"
        width={256}
        height={256}
        className="my-8"
      />
      <Link href="/">
        <CtaButton text="Go Back" />
      </Link>
    </div>
  );
};

export default ThanksPage;

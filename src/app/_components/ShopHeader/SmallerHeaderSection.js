import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SmallerHeaderSection({text,link,bg,btnClr,image,par,}) {
  return (
    <div
      className="rounded-lg  w-1/2 h-full p-4 justify-between items-center flex"
      style={{ background: bg }}
    >
      <div className="gap-2 flex flex-col">
        <h2 className="font-bold text-2xl">{text}</h2>
        <p className="font-semibold text-slate-700">{par}</p>
        <Link
          href={link}
          className="rounded-full text-white py-2 px-8 w-fit"
          style={{ background: btnClr }}
        >
          Explore
        </Link>
      </div>
      <Image
        alt="discount product"
        src={image}
        width={160}
        height={160}
        className="right-40"
      />
    </div>
  );
}

import Image from "next/image";
import React from "react";

export const ProductBoxImage = ({ product }) => {
  const myLoader = ({ src }) => {
    return `${product.images[0]}`;
  };
  return (
    <Image
      loader={myLoader}
      src={product.images[0]}
      className="h-48 rounded-lg w-48"
      width={48}
      height={48}
      alt={product.title}
    />
  );
};

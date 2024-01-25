import Image from "next/image";
import React from "react";

export const ProductBoxImage = ({ product }) => {
  const myLoader = ({ src }) => {
    return `${product.image}`;
  };
  return (
    <Image
      loader={myLoader}
      src={product.image}
      className="h-48 rounded-lg w-48"
      width={48}
      height={48}
      alt={product.name}
    />
  );
};

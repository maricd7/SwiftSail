"use client";
import { getUserBoughtProducts } from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { Coming_Soon } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BoughtProducts() {
  const [boughtProducts, setBoughtProducts] = useState([]);
  const { currentUser } = useAuthContext();
  useEffect(() => {
    const fetchBoughtProoducts = async () => {
      const data = await getUserBoughtProducts(currentUser);
      setBoughtProducts(data);
    };
    fetchBoughtProoducts();
  }, [currentUser]);
  return (
    <div className="bg-white rounded-lg p-8 shadow-md flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Bought Products</h2>
      <ul className="flex flex-col gap-4">
        {boughtProducts.map((product, index) => (
          <li key={index} className="flex gap-4 items-center">
            <Image
              src={product.image}
              width={64}
              height={64}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

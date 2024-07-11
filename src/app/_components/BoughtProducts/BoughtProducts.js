"use client";
import { getUserBoughtProducts } from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BoughtProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { currentUser } = useAuthContext();
  useEffect(() => {
    console.log(currentUser, "asdasd");
    const fetchBoughtProoducts = async () => {
      const data = await getUserBoughtProducts();
      console.log(data, "data");
    };
    fetchBoughtProoducts(currentUser);
  }, []);
  return (
    <div className="bg-white rounded-lg p-8 shadow-md flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Bought Products</h2>
      <ul className="flex flex-col ">
        {filteredProducts.map((product, index) => (
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

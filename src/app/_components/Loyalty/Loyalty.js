"use client";

import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { getUserLoyalty } from "@/app/actions/userActions";

const Loyalty = () => {
  const { currentUser } = useAuthContext();
  const [loyalty, setLoyalty] = useState(null);

  useEffect(() => {
    const getLoyalty = async () => {
      if (currentUser?.email) {
        const userLoyalty = await getUserLoyalty(currentUser.email);
        setLoyalty(userLoyalty);
      }
    };
    getLoyalty();
  }, [currentUser]);

  if (!loyalty) {
    return console.log("Error fetching loyalty.");
  }
  return (
    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
      <span className="px-2 py-1 bg-blue-100 rounded-md">
        Loyalty: {loyalty.loyalty}
      </span>
    </div>
  );
};
export default Loyalty;

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

  console.log(loyalty, "loyalty");
  return <div>{loyalty ? <span>Loyalty: {loyalty.loyalty}</span> : <></>}</div>;
};
export default Loyalty;

"use client";
import React, { useEffect, useState } from "react";
import { CheckoutProduct } from "./CheckoutProduct/CheckoutProduct";
import { TotalPrice } from "./TotalPrice";
import { getUserLoyalty } from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";

export const CheckoutProducts = ({ cart }) => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [loyaltyDiscount, setLoyaltyDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const { currentUser } = useAuthContext();

  useEffect(() => {
    let orderTotalSum = 0;
    cart.forEach((product) => {
      orderTotalSum += product.quantity * product.price;
    });
    setOrderTotal(orderTotalSum);
  }, [cart]);

  useEffect(() => {
    const getLoyaltyDiscount = async () => {
      if (currentUser) {
        let userLoyalty = await getUserLoyalty(currentUser.email);
        setLoyaltyDiscount(userLoyalty.loyalty);
      }
    };
    getLoyaltyDiscount();
  }, [currentUser]);

  useEffect(() => {
    const applyDiscount = () => {
      let discountAmount = (loyaltyDiscount / 1000) * orderTotal;
      setFinalTotal(orderTotal - discountAmount);
    };
    applyDiscount();
  }, [orderTotal, loyaltyDiscount]);

  return (
    <div className="w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 ">
      <h4 className="font-semibold text-2xl mb-8">Review your Products</h4>
      <CheckoutProduct cart={cart} />
      {loyaltyDiscount ? (
        <div className="flex justify-between">
          <span>Loyalty discount: </span>
          <span className="text-green-500 font-semibold">
            {loyaltyDiscount / 10}%
          </span>
        </div>
      ) : (
        <></>
      )}
      <TotalPrice orderTotal={finalTotal.toFixed(2)} />
    </div>
  );
};

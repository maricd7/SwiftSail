"use client";
import React, { useState, useEffect } from "react";
import { useProductContext } from "../contexts/ProductsContext";
import { CheckoutProducts } from "../_components/CheckoutProducts";
import { CheckoutForm } from "../_components/Form";
import { getUserLoyalty } from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [loyaltyDiscount, setLoyaltyDiscount] = useState(0);
  const { quantity } = useProductContext();
  const { currentUser } = useAuthContext();

  // Calculate total
  useEffect(() => {
    let sum = 0;
    cart.forEach((product) => {
      const priceForSum = product.price * product.quantity;
      sum += parseFloat(priceForSum);
    });
    setTotal(sum);
  }, [cart]);

  // Fetch loyalty discount
  useEffect(() => {
    const fetchLoyaltyDiscount = async () => {
      if (currentUser) {
        let userLoyalty = await getUserLoyalty(currentUser.email);
        setLoyaltyDiscount(userLoyalty.loyalty);
      }
    };
    fetchLoyaltyDiscount();
  }, [currentUser]);

  useEffect(() => {
    const applyDiscount = () => {
      let discountAmount = (loyaltyDiscount / 1000) * total;
      setFinalTotal(total - discountAmount);
    };
    applyDiscount();
  }, [total, loyaltyDiscount]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div className="w-full h-cover flex md:flex-row flex-col items-start justify-center gap-8">
      <CheckoutForm
        cart={cart}
        total_amount={finalTotal.toFixed(2)}
        quantity={quantity}
      />
      <CheckoutProducts cart={cart} finalTotal={finalTotal.toFixed(2)} />
    </div>
  );
};

export default Checkout;

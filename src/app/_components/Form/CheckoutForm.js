"use client";
import React, { useState, useEffect } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";
import { updateUserLoyalty } from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { updateStock } from "@/app/actions/updateStock";

export const CheckoutForm = ({ total_amount, cart }) => {
  const [formData, setFormData] = useState({});
  const [products, setProducts] = useState([]);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    async function getData() {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    }
    getData();
  }, []);

  //handle submit
  async function handleSubmit(e) {
    e.preventDefault();

    const customerData = await supabase
      .from("customers")
      .upsert(formData)
      .select();
    let customer = customerData.data[0];

    const orderData = await supabase
      .from("orders")
      .upsert({ customer_id: customer.id, value: total_amount })
      .select();
    let order = orderData.data[0];

    cart.forEach(async (el) => {
      await supabase.from("order_product").insert({
        order_id: order.id,
        product_id: el.id,
        quantity: el.quantity,
      });
      updateStock(products, el);
    });

    //update loyalty
    updateUserLoyalty(currentUser.email, cart.length);
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit} method="POST" id="customer_form">
      <div className="w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 ">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <Input
          name="email"
          type="text"
          label="Email"
          placeholder="email"
          onChange={handleInputChange}
        />
        <Input
          name="name"
          label="Name"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="phone"
          label="Phone"
          placeholder="Phone"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="city"
          label="City"
          placeholder="City"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="address"
          label="Address"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="postal_code"
          label="Postal code"
          placeholder="Postal code"
          onChange={handleInputChange}
        />
        <CtaButton type="submit" text="Order Now" />
      </div>
    </form>
  );
};

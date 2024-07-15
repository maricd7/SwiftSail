"use client";
import React, { useState, useEffect } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";
import {
  checkIfCustomerExists,
  updateUserLoyalty,
} from "@/app/actions/userActions";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { updateStock } from "@/app/actions/updateStock";
import { schema } from "@/app/Schemas";
import { useFormik } from "formik";

export const CheckoutForm = ({ total_amount, cart }) => {
  const [products, setProducts] = useState([]);
  const { currentUser } = useAuthContext();
  const [customer, setCustomer] = useState();

  useEffect(() => {
    async function getData() {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    }
    getData();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      city: "",
      address: "",
      postalCode: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const userExists = await checkIfCustomerExists(currentUser.email);

      if (!userExists) {
        const customerData = await supabase
          .from("customers")
          .upsert(values)
          .select();
        setCustomer(customerData.data[0]);
      } else {
        const { data } = await supabase
          .from("customers")
          .select()
          .eq("email", currentUser.email);
        setCustomer(data[0]);
      }

      if (customer) {
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
      }

      //update loyalty
      updateUserLoyalty(currentUser.email, cart.length);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} method="POST" id="customer_form">
      <div className="w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 ">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <Input
          name="email"
          type="text"
          label="Email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
        <Input
          name="name"
          label="Name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
        <Input
          type="number"
          name="phone"
          label="Phone"
          placeholder="Phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <div className="text-red-500">{formik.errors.phone}</div>
        )}
        <Input
          type="text"
          name="city"
          label="City"
          placeholder="City"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        {formik.errors.city && formik.touched.city && (
          <div className="text-red-500">{formik.errors.city}</div>
        )}
        <Input
          type="text"
          name="address"
          label="Address"
          placeholder="Address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && formik.touched.address && (
          <div className="text-red-500">{formik.errors.address}</div>
        )}
        <Input
          type="text"
          name="postalCode"
          label="Postal code"
          placeholder="Postal code"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
        />
        {formik.errors.postalCode && formik.touched.postalCode && (
          <div className="text-red-500">{formik.errors.postalCode}</div>
        )}
        <CtaButton type="submit" text="Order Now" />
      </div>
    </form>
  );
};

'use client';
import React from "react";
import { CtaButton, Input } from "../common";
import { useFormik } from "formik";
import { schema } from "@/app/Schemas";

export const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      address: "",
      city: "",
    },
    validationSchema: schema,
    onSubmit: async ({ name, email, phone }) => {
      console.log("Submitted");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 ">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <Input
          value={values.email}
          name="email"
          type="text"
          label="Email"
          placeholder="email"
          onChange={handleChange}
        />
        <Input
          value={values.name}
          name="name"
          label="Name"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          value={values.phone}
          type="number"
          name="phone"
          label="Phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <div>
          <Input
            type="text"
            name="city"
            label="City"
            placeholder="City"
            value={values.city}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address"
            label="Address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="postalCode"
            label="Postal code"
            placeholder="Postal code"
            value={values.postalCode}
            onChange={handleChange}
          />
        </div>
        {errors.password && touched.password && (
          <span>{errors.password}</span>
        )}
        <CtaButton type="submit" text="Order Now" />
      </div>
    </form>
  );
};

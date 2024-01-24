"use client";
import React from "react";
import { CtaButton, Input } from "../common";
import { useFormik } from "formik";
import { schema } from "@/app/Schemas";
import supabase from "@/app/supabase";

export const CheckoutForm = ({ total_amount, cart }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      postal_code: "",
      address: "",
      city: "",
    },
    validationSchema: schema,
    
  })
  
  const { errors, touched, values, handleChange,handleSubmit} = formik;


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
          errors={errors.email}
          touched={touched.email}
        />
        <Input
          value={values.name}
          name="name"
          label="Name"
          placeholder="Name"
          onChange={handleChange}
          errors={errors.name}
          touched={touched.name}
        />
        <Input
          value={values.phone}
          type="number"
          name="phone"
          label="Phone"
          placeholder="Phone"
          onChange={handleChange}
          errors={errors.phone}
          touched={touched.phone}
        />
        <Input
          type="text"
          name="city"
          label="City"
          placeholder="City"
          value={values.city}
          onChange={handleChange}
          errors={errors.city}
          touched={touched.city}
        />
        <Input
          type="text"
          name="address"
          label="Address"
          placeholder="Address"
          value={values.address}
          onChange={handleChange}
          errors={errors.address}
          touched={touched.address}
        />
        <Input
          type="text"
          name="postal_code"
          label="Postal code"
          placeholder="Postal code"
          value={values.postal_code}
          onChange={handleChange}
          errors={errors.postal_code}
          touched={touched.postal_code}
        />

        {errors.password && touched.password && <span>{errors.password}</span>}
        <CtaButton type="submit" text="Order Now"/>
      </div>
    </form>
  );
};

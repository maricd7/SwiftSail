import React from 'react'
import * as Yup from "yup";

export const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required('Email is required').email("Invalid email"),
    phone: Yup.string().required(),
    city: Yup.string().required(),
    address: Yup.string().required(),
    postalCode: Yup.string().required(),
  });

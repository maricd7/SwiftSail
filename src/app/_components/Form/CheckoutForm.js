import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CtaButton, Input } from '../common';

const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      city: '',
      address: '',
      postalCode: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8'>
      <h1 className='text-4xl font-bold'>Checkout</h1>
      <Input
        label='Email'
        type='text'
        placeholder='Email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
      <Input
        label='Email'
        type='text'
        placeholder='Email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <CtaButton type='submit' text='Order Now' />
    </form>
  );
};

export default CheckoutForm;

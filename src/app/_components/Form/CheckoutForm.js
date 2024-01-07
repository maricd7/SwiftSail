import React from 'react'
import { CtaButton, Input } from '../common'
import * as yup from 'yup';
import { useFormik } from 'formik';

export const CheckoutForm = () => {
  return (
    <div className='w-96 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 '>
        <h1 className='text-4xl font-bold'>Checkout</h1>
        <Input label='Email' placeholder='email'/>
        <Input label='Name' placeholder='Name'/>
        <Input label='Phone' placeholder='Phone'/>
        <div>
            <Input label='City' placeholder='City'/>
            <Input label='Address' placeholder='Address'/>
            <Input label='Postal code' placeholder='Postal code'/>
        </div>
        <CtaButton text='Order Now'/>
    </div>
  )
}
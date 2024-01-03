import React from 'react'
import { CheckoutForm } from '../_components/Form'
import { CheckoutProducts } from '../_components/CheckoutProducts'

const Checkout = () => {
  return (
    <div className='w-full h-cover flex items-start justify-center my-8 gap-8'>
      <CheckoutForm/>
      <CheckoutProducts/>
    </div>
  )
}

export default Checkout
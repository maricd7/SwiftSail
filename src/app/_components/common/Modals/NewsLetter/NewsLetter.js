'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../../Input'
import { CtaButton } from '../../CtaButton'
import { Icon } from '@iconify/react'
import Image from 'next/image'
// import { POST } from '@/app/api/send/route'

export default function NewsLetter({setNewsLetter}) {
  const [email, setEmail] = useState('');

  function handleOnChange(e){
    setEmail(e.target.value)
  }

  // async function handleSubscribe() {
  //   try {
  //     const subject = 'Subscription Confirmation';
  //     const response = await POST(email, subject);
  //     if (response.ok) {
  //       console.log('Email subscription successful');
  //     } else {
  //       console.error('Failed to subscribe:', await response.text());
  //     }
  //   } catch (error) {
  //     console.error('Error subscribing:', error);
  //   }
  // }

  return (
    <div className='absolute rounded-lg z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex gap-4'>
        <Image width={500} height={500} alt='Newsletter image' src='https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <div className='p-16'>
      <Icon onClick={()=>{setNewsLetter(false)}} className='absolute top-4 right-4 cursor-pointer' icon="carbon:close" width="24" height="24"  style={{color: '#000'}} />
        <h2 className='text-2xl font-bold text-center'>Keep up with latest discounts and offers.</h2>
        <p className='text-lg text-center'>Unlock exclusive deals and updates! Subscribe now for the latest trends and promotions straight to your inbox.</p>
        <div>
            <Input onChange={(e)=>handleOnChange(e)} placeholder='Your email'/>
            <CtaButton  text='Subscribe'/>
        </div>
      </div>
    </div>
  )
}

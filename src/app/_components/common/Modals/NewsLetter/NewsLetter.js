'use client'
import React from 'react'
import { Input } from '../../Input'
import { CtaButton } from '../../CtaButton'
import { Icon } from '@iconify/react'

export default function NewsLetter() {
  return (
    <div className='absolute p-32 rounded-lg z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg'>
        <Icon className='absolute top-4 right-4 cursor-pointer' icon="carbon:close" width="24" height="24"  style={{color: '#000'}} />
        <h2 className='text-2xl font-bold text-center'>Keep up with latest discounts and offers.</h2>
        <p className='text-lg text-center'>Unlock exclusive deals and updates! Subscribe now for the latest trends and promotions straight to your inbox.</p>
        <div>
            <Input placeholder='Your email'/>
            <CtaButton text='Subscribe'/>
        </div>
    </div>
  )
}

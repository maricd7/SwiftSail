'use client'
import { Icon } from '@iconify/react'
import React from 'react'

export const DeleteItem = ({onClick}) => {
  return (
    <div className="w-full flex justify-end items-end"><Icon icon="carbon:trash-can" className="w-8 h-8  cursor-pointer" onClick={onClick} /></div>
  )
}

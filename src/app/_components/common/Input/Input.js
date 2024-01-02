import React from 'react'

export const Input = ({placeholder,label}) => {
  return (
    <div className='flex flex-col py-4'>
        <label>{label}</label>
        <input placeholder={placeholder} className='rounded-lg border-2 border-gray-500	 p-2'/>
    </div>
  )
}

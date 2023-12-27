import React from 'react'

export const CtaButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='rounded-lg w-full flex justify-center mt-4 bg-orange-400 text-white p-4 hover:bg-orange-600'>{text}</button>
  )
}

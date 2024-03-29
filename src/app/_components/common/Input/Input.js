'use client';

import React from 'react';

export const Input = React.forwardRef(({ placeholder, label, type, name, onChange, onBlur, value,errors,touched},ref) => {
  
  return (
    <div className='flex flex-col py-4 gap-2'>
      <label>{label}</label>
      <input
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className='rounded-lg border-2 border-gray-500 p-2'
        ref={ref}
      />
      {errors && touched && (
          <span className='text-red-400'>{errors}</span>
      )}
    </div>
  );
});


Input.displayName = 'Input';

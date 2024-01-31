import React from 'react'

export const QuantitySelector = ({onChange}) => {
  return (
    <select onChange={onChange}>
                {[1, 2, 3].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
  )
}

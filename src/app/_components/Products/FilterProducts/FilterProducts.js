import React from 'react'

export const FilterProducts = ({selectedFilter,setSelectedFilter}) => {
  return (
    <select
    value={selectedFilter}
    onChange={(e) => setSelectedFilter(e.target.value)}
    className="text-slate-950 bg-transparent"
  >
    <option className="bg-transparent">Lowest</option>
    <option className="bg-transparent">Highest</option>
    <option className="bg-transparent">Biggest Discount</option>
  </select>
  )
}

import React from 'react'

const SectionTitle = ({ children, title }) => {
  return (
    <div className="flex flex-row gap-x-3 items-center mb-12">
      {children}
      <h2 className="text-3xl font-bold text-color">{title}</h2>
    </div>
  )
}

export default SectionTitle

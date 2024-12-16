import React from 'react'

const ToolsBadge = ({ name, logo, colorClasses }) => {
  return (
    <span
      className={`flex flex-row gap-x-1 items-center text-xs me-2 px-2.5 py-1 rounded-full text-white-50 ${colorClasses} w-fit`}
    >
      {logo && <img src={logo} alt={`${name} logo`} className="size-3" />}
      {name}
    </span>
  )
}

export default ToolsBadge

import React from 'react'

const Badge = ({ children }) => {
  return (
    <span class="bg-blue-100 text-black-100 w-min font-medium px-3.5 py-1 rounded-full dark:border-white-100 border dark:bg-black-50 dark:text-white-100">
      {children}
    </span>
  )
}

export default Badge

import React from 'react'

const Badge = ({ children, href }) => {
  return (
    <a
      href={href}
      target="__blank"
      class="bg-pink-100 flex flex-row gap-x-2 items-center text-dark-blue-100 w-min px-3.5 py-1 rounded-full hover:scale-110 hover:bg-primary/20 transition dark:border-white-100 border dark:bg-dark-blue-50 dark:text-white-100"
    >
      {children}
    </a>
  )
}

export default Badge

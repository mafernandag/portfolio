import React from 'react'

const Badge = ({ children, href, copyText }) => {
  const handleClick = (e) => {
    if (copyText) {
      e.preventDefault()
      navigator.clipboard.writeText(copyText).then(() => {
        alert('Email copied to clipboard!')
      })
    }
  }
  return (
    <a
      href={href}
      target="__blank"
      className="flex flex-row gap-x-2 items-center w-min px-3.5 py-1 rounded-full bg-light-purple-50 text-dark-blue-100 dark:bg-dark-blue-50 dark:text-white-100 border dark:border-white-100 hover:scale-110 hover:dark:bg-primary hover:dark:text-dark-purple-100 hover:dark:border-dark-purple-100 hover:bg-dark-purple-100 hover:text-white-100 transition "
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default Badge

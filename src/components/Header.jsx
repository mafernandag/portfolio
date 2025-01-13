import React from 'react'
import { useState } from 'react'
import { handleError } from 'vue'
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  const [dark, setDark] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const toggleDarkMode = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
    console.log(document.body.classList.value.includes('dark'))
  }
  return (
    <header className="flex justify-center items-center py-3 mt-1 fixed w-full px-10">
      <nav className="flex flex-row gap-x-6 w-full text-sm font-semibold text-dark-purple-100 dark:text-white-100 items-center">
        <div className="flex flex-grow" />
        <a href="#experience" className="header-hover">
          Experience
        </a>
        <a href="#projects" className="header-hover">
          Projects
        </a>
        <a href="#about" className="header-hover">
          About
        </a>
        {/* <a href="#contact" className="header-hover ">
          Contact
        </a> */}

        {/* Dropdown button */}
        <LanguageDropdown />

        <div className="flex flex-grow" />
        <span onClick={toggleDarkMode} className="header-hover">
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          )}{' '}
        </span>
      </nav>
    </header>
  )
}

export default Header

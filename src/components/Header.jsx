import React from 'react'
import { useState } from 'react'
import { handleError } from 'vue'

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
        <a href="#experience" className="dark:hover:text-accent transition">
          Experience
        </a>
        <a href="#projects" className="dark:hover:text-accent transition">
          Projects
        </a>
        <a href="#about" className="dark:hover:text-accent transition">
          About
        </a>
        {/* <a href="#contact" className="dark:hover:text-accent transition">
          Contact
        </a> */}

        {/* Dropdown button */}
        <div
          className="relative inline-block text-left text-color dark:hover:text-accent"
          onClick={handleToggleDropdown}
        >
          <div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:shadow-md transition"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              EN
              <svg
                className="-mr-1 size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {openDropdown && (
            <div
              className="absolute bg-gray-50 right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Spanish
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-grow" />
        <span
          onClick={toggleDarkMode}
          className="dark:hover:text-accent transition"
        >
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

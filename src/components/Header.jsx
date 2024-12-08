import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
    console.log(document.body.classList.value.includes('dark'))
  }
  return (
    <header className="flex justify-center items-center py-3 mt-1">
      <nav className="flex flex-row gap-x-6 text-sm font-semibold text-dark-purple-100 dark:text-white-100 items-center">
        <a href="/about" className="dark:hover:text-accent transition">
          Experience
        </a>
        <a href="/projects" className="dark:hover:text-accent transition">
          Projects
        </a>
        <a href="/" className="dark:hover:text-accent transition">
          About
        </a>
        <a href="/contact" className="dark:hover:text-accent transition">
          Contact
        </a>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-6"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
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

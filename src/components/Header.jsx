import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-center items-center py-3 mt-1">
      <nav className="flex flex-row gap-x-6 text-sm font-semibold text-dark-purple-100 dark:text-white-100 items-center">
        <a href="/about" className="hover:text-accent transition">
          Experience
        </a>
        <a href="/projects" className="hover:text-accent transition">
          Projects
        </a>
        <a href="/" className="hover:text-accent transition">
          About
        </a>
        <a href="/contact" className="hover:text-accent transition">
          Contact
        </a>
        <a href="/" className="hover:text-accent transition">
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
        </a>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg> */}
      </nav>
    </header>
  )
}

export default Header

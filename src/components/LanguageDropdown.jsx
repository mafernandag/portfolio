import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
  const { i18n } = useTranslation()
  const [openDropdown, setOpenDropdown] = useState(false)
  const current = i18n.language.startsWith('es') ? 'ES' : 'EN'
  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setOpenDropdown(false)
  }
  return (
    <div
      className="relative inline-block text-left text-color header-hover"
      onClick={handleToggleDropdown}
    >
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white py-2 text-sm font-semibold"
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
          {current}
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
          className="absolute bg-gray-50  z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                changeLanguage('es')
              }}
            >
              Español
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                changeLanguage('en')
              }}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown

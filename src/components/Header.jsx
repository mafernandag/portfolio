import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  const { t } = useTranslation()
  const [dark, setDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
    console.log(document.body.classList.value.includes('dark'))
  }

  useEffect(() => {
    const scrollContainer = document.querySelector('.bg-settings')

    const getScrollTop = () => {
      if (scrollContainer) return scrollContainer.scrollTop
      return (
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0
      )
    }

    const handleScroll = () => {
      setIsScrolled(getScrollTop() > 10)
    }

    handleScroll()

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true
      })
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={
        `fixed top-0 w-fit place-self-center rounded-full z-50 px-5 py-0.5 mt-1 transition duration-300 ` +
        (isScrolled
          ? 'bg-white/70 dark:bg-dark-blue-100/60 backdrop-blur-md shadow-md'
          : 'bg-transparent')
      }
    >
      <nav className="flex flex-row gap-x-6 w-full text-sm font-semibold text-dark-purple-100 dark:text-white-100 items-center">
        <a href="#experience" className="header-hover">
          {t('nav.experience')}
        </a>
        <a href="#projects" className="header-hover">
          {t('nav.projects')}
        </a>
        <a href="#about" className="header-hover">
          {t('nav.about')}
        </a>
        {/* <a href="#contact" className="header-hover ">
          Contact
        </a> */}
        {/* Dropdown button */}
        <LanguageDropdown />

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

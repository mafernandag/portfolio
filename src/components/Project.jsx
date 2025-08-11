import React from 'react'
import ToolsBadge from './ToolsBadge'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwindcss.svg'
import firebase from '../assets/firebase.svg'
import qwik from '../assets/qwik.svg'
import python from '../assets/python.svg'
import materialUI from '../assets/materialui.svg'
import javascript from '../assets/javascript.svg'
import appsScript from '../assets/appsScript.svg'
import { useTranslation } from 'react-i18next'

const Project = ({
  name,
  tools,
  description,
  image,
  previewLink,
  githubLink
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 lg:gap-y-0 pb-10 items-center">
      <img
        alt="project screenshot"
        src={image}
        className="rounded-xl w-full lg:w-1/2 hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-200"
      />
      <div className="flex flex-col gap-y-3">
        <h3 className="text-2xl font-bold text-color">{name}</h3>
        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
          {tools.map((tool) => {
            console.log(tool)
            switch (tool) {
              case 'React':
                return (
                  <ToolsBadge
                    name="React"
                    colorClasses={'bg-cyan-950'}
                    logo={react}
                  />
                )
              case 'Tailwind CSS':
                return (
                  <ToolsBadge
                    name="Tailwind CSS"
                    colorClasses={'bg-teal-950'}
                    logo={tailwind}
                  />
                )
              case 'Firebase':
                return (
                  <ToolsBadge
                    name="Firebase"
                    colorClasses={'bg-orange-950'}
                    logo={firebase}
                  />
                )
              case 'Qwik':
                return (
                  <ToolsBadge
                    name="Qwik"
                    colorClasses={'bg-violet-950'}
                    logo={qwik}
                  />
                )
              case 'Python':
                return (
                  <ToolsBadge
                    name="Python"
                    colorClasses={'bg-indigo-950'}
                    logo={python}
                  />
                )
              case 'Material UI':
                return (
                  <ToolsBadge
                    name="Material UI"
                    colorClasses={'bg-blue-950'}
                    logo={materialUI}
                  />
                )
              case 'Google Apps Script':
                return (
                  <ToolsBadge
                    name="Google Apps Script"
                    colorClasses={'bg-green-950'}
                    logo={appsScript}
                  />
                )
              case 'JavaScript':
                return (
                  <ToolsBadge
                    name="JavaScript"
                    colorClasses={'bg-yellow-950'}
                    logo={javascript}
                  />
                )
              default:
                return null
            }
          })}
        </div>
        <p className="text-neutral-600 text-pretty dark:text-gray-400 leading-snug text-sm">
          {description}
        </p>
        <div className="flex flex-row gap-x-2">
          {previewLink && (
            <a
              href={previewLink}
              target="__blank"
              type="button"
              className="flex flex-row gap-x-2 items-center text-gray-900 dark:text-white-50 bg-white w-min border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
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
                <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
              </svg>
              Preview
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="__blank"
              type="button"
              className="flex flex-row gap-x-2 items-center text-gray-900 dark:text-white-50 bg-white w-min border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
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
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              {t('projectButton.repo')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project

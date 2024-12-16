import React from 'react'
import ToolsBadge from './ToolsBadge'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwindcss.svg'
import firebase from '../assets/firebase.svg'
import qwik from '../assets/qwik.svg'
import python from '../assets/python.svg'
import materialUI from '../assets/materialui.svg'

const Project = ({ name, tools, description, image, previewLink }) => {
  return (
    <div className="flex flex-row gap-x-6 pb-10 items-center">
      <img alt="project screenshot" src={image} className="rounded-xl w-1/2" />
      <div className="flex flex-col gap-y-4">
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
              default:
                return null
            }
          })}
        </div>
        <p className="text-neutral-600 text-pretty dark:text-gray-400 leading-snug font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quibusdam nesciunt nam sit explicabo assumenda vitae sapiente id et,
          qui modi officiis ut.
        </p>
        <button
          type="button"
          className="text-gray-900 dark:text-white-50 bg-white w-min border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <a href={previewLink} target="__blank">
            Preview
          </a>
        </button>
      </div>
    </div>
  )
}

export default Project

import React from 'react'

const Timeline = ({ date, title, company, description, marginBottom }) => {
  return (
    <div className={`flex flex-row gap-x-14 ml-3 ${marginBottom}`}>
      <li className="mb-10 ms-4 w-[40%]">
        <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 dark:bg-primary"></div>
        <h3 className="text-xl font-bold dark:text-primary text-secondary">
          {title}
        </h3>
        <p className="mb-1 font-semibold text-lg text-neutral-700 dark:text-accent">
          {company}
        </p>
        <time className="mb-1 text-sm font-normal leading-none text-neutral-500 dark:text-gray-300">
          {date}
        </time>
      </li>
      <div className="w-[60%]">
        <h4 className="text-neutral-600 text-pretty dark:text-gray-300 leading-relaxed font-medium">
          {description}
        </h4>
      </div>
    </div>
  )
}

export default Timeline

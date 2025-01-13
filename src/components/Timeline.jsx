import React from 'react'

const Timeline = ({
  date,
  title,
  company,
  description,
  marginBottom,
  jobType
}) => {
  return (
    <div className={`flex flex-row gap-x-14 ml-3 ${marginBottom}`}>
      <div className="mb-10 ms-4 w-[40%]">
        <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 dark:bg-primary" />
        <h3 className="text-xl leading-tight font-bold dark:text-primary text-secondary">
          {title}
        </h3>
        <p className="font-semibold text-lg text-neutral-700 dark:text-accent">
          {company}
        </p>
        <time className="text-sm mb-1 leading-none text-neutral-500 dark:text-gray-300">
          {date}
        </time>
        <p className="text-sm font-light text-neutral-400 dark:text-gray-400">
          {jobType}
        </p>
      </div>
      <div className="w-[60%]">
        <h4 className="text-neutral-600 text-pretty dark:text-gray-300 leading-relaxed font-medium">
          {description}
        </h4>
      </div>
    </div>
  )
}

export default Timeline

import React from 'react'

export const Timeline = ({ date, title, description }) => {
  return (
    <li class="mb-10 ms-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  )
}

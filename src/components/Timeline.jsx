import React from 'react'
import { motion } from 'motion/react'

const Timeline = ({
  date,
  title,
  company,
  description,
  marginBottom,
  jobType,
  time
}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-x-14 ml-3 ${marginBottom}`}>
      <div className="mb-10 ms-4 w-full lg:w-[40%]">
        <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 dark:bg-primary" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl leading-tight font-bold dark:text-primary text-secondary">
            {title}
          </h3>
          <p className="font-semibold text-lg text-purple-accent dark:text-accent">
            {company}
          </p>
          <time className="text-sm mb-1 leading-none text-neutral-500 dark:text-gray-300">
            {date}
          </time>
          <p className="text-sm font-light text-neutral-400 dark:text-gray-400 mb-1">
            {time}
          </p>
          <p className="text-sm font-light text-neutral-400 dark:text-gray-400">
            {jobType}
          </p>
        </motion.div>
      </div>
      <motion.div
        className="w-full lg:w-[60%] pl-4 md:pl-0"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4
          className="bold-description text-neutral-600 text-pretty dark:text-gray-300 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </motion.div>
    </div>
  )
}

export default Timeline

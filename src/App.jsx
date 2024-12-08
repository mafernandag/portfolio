import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import '@fontsource-variable/onest'
import { Timeline } from './components/Timeline'

export default function App() {
  return (
    <div className="bg-settings bg-light-gradient dark:bg-dark-gradient xl:px-80 lg:px-60 md:px-40 px-10">
      <Header />
      <div className="flex flex-col gap-y-36">
        {/* INTRODUCTION */}
        <div className="pt-36 flex flex-col gap-y-6 mb-14">
          <h1 className="text-5xl font-bold text-color">Hello, I'm Maria!</h1>
          <p className="text-xl font-medium text-dark-purple-100 dark:text-white-100 w-3/4">
            Informatics Engineer from Venezuela, with hands-on experience in{' '}
            <b>web development</b>, specializing in modern{' '}
            <b>JavaScript frameworks </b>
            and user interface design.
          </p>
          {/* BADGES */}
          <div className="flex flex-row gap-x-4">
            <Badge href={'https://www.linkedin.com/in/maferguerrag/'}>
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
                class="size-4 mb-0.25"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
              LinkedIn
            </Badge>
            <Badge href={'mailto:mariafgg53@gmail.com'}>
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
                class="size-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" />
                <path d="M15 18h6" />
                <path d="M18 15l3 3l-3 3" />
              </svg>
              mariafgg53@gmail.com
            </Badge>
          </div>
          {/*  <p className="text-xl font-medium mt-4 text-white-100">
          Passionate about creating intuitive user experiences and maintaining
          high code quality. Proven track record in both remote and hybrid work
          environments, collaborating effectively with international teams while
          managing multiple projects.
        </p> */}
        </div>
        <div>
          {/* PROFESSIONAL EXPERIENCE */}
          <div className="flex flex-row gap-x-3 items-center mb-12">
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
              class="size-7 text-color"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <h2 className="text-3xl font-bold text-color">
              Professional Experience
            </h2>
          </div>
          <ol class="relative border-s border-gray-200 dark:border-gray-700 ml-3">
            <Timeline
              title={'Web Developer and Technical Support'}
              date={'June 2022 – Present'}
              description={
                'Currently designing and developing a mentor matching platform utilizing React.js, Material UI, and Firebase for real-time authentication and data management. Enhanced the research journal web page with updates in Ruby, HTML, and SASS. Leveraged GitHub for collaborative development and version control.'
              }
              company={'Accel AI'}
              marginBottom={'mb-16'}
            />
            <Timeline
              title={'Front-end Web Developer Intern'}
              date={'August 2023 – December 2023'}
              description={
                'Redesigned and implemented LCC OpenTech’s corporate website using Qwik, transforming it into a modern, user-friendly platform aligned with industry standards. Translated Figma designs into sleek, responsive layouts using Tailwind CSS, delivering a visually appealing and adaptable user interface.'
              }
              company={'LLC OpenTech'}
            />
          </ol>
        </div>
        <div>
          {/* PROJECTS */}
          <div className="flex flex-row gap-x-3 items-center mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 text-color"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <h2 className="text-3xl font-bold text-color">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

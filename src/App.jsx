import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import '@fontsource-variable/onest'
import Timeline from './components/Timeline'
import Project from './components/Project'
import SectionTitle from './components/SectionTitle'
import opentech from './assets/opentech.png'

export default function App() {
  const experience = [
    {
      title: 'Web Developer and Technical Support',
      date: 'June 2022 – Present',
      description:
        'Currently designing and developing a mentor-matching platform utilizing React.js, Material UI, and Firebase for real-time authentication and data management. Enhanced the research journal web page with updates in Ruby, HTML, and SASS. Leveraged GitHub for collaborative development and version control.',
      company: 'Accel AI'
    },
    {
      title: 'Front-end Web Developer Intern',
      date: 'August 2023 – December 2023',
      description:
        'Redesigned and implemented LCC OpenTech’s corporate website using Qwik, transforming it into a modern, user-friendly platform aligned with industry standards. Translated Figma designs into sleek, responsive layouts using Tailwind CSS, delivering a visually appealing and adaptable user interface.',
      company: 'LLC OpenTech'
    }
  ]

  const projects = [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam nesciunt nam sit explicabo assumenda vitae sapiente id et, qui modi officiis ut.',
      link: '#',
      tools: ['React', 'Tailwind CSS', 'Firebase']
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam nesciunt nam sit explicabo assumenda vitae sapiente id et, qui modi officiis ut.',
      link: '#',
      tools: ['React', 'Tailwind CSS', 'Firebase']
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam nesciunt nam sit explicabo assumenda vitae sapiente id et, qui modi officiis ut.',
      link: '#',
      tools: ['React', 'Tailwind CSS', 'Firebase']
    }
  ]
  return (
    <div className="bg-settings bg-light-gradient dark:bg-dark-gradient">
      <Header />
      <div className="xl:px-80 lg:px-60 md:px-40 px-10">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 mb-0.25"
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
              <Badge href={'#'} copyText={'mariafgg53@gmail.com'}>
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
                  className="size-4"
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
          <div id={'experience'}>
            {/* PROFESSIONAL EXPERIENCE */}
            <SectionTitle title={'Professional Experience'}>
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
                className="size-7 text-color"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
            </SectionTitle>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
              {experience.map((exp, index) => (
                <Timeline
                  key={index}
                  {...exp}
                  marginBottom={index === experience.length - 1 ? '' : 'mb-16'}
                />
              ))}
            </ol>
          </div>
          <div id="projects">
            {/* PROJECTS */}
            <SectionTitle title={'Projects'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 text-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </SectionTitle>
            <Project
              name={'OpenTech LCC Company Website'}
              tools={['Qwik', 'Tailwind CSS']}
              image={opentech}
              previewLink={'https://lccopen.tech/'}
            />
          </div>
          <div id="about">
            {/* ABOUT ME */}
            <SectionTitle title={'About Me'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 text-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </SectionTitle>
          </div>
        </div>
      </div>
    </div>
  )
}

import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import '@fontsource-variable/onest'
import Timeline from './components/Timeline'
import Project from './components/Project'
import SectionTitle from './components/SectionTitle'
import opentech from './assets/opentech.png'
import ucabForms from './assets/ucab-forms.png'
import profileImage from './assets/profileIcon.jpg'

export default function App() {
  const experience = [
    {
      title: 'Web Developer and Technical Support',
      date: 'June 2022 – Present',
      description:
        'Currently designing and developing a mentor-matching platform utilizing React.js, Material UI, and Firebase for real-time authentication and data management. Enhanced the research journal web page with updates in HTML, and SASS. Leveraged GitHub for collaborative development and version control.',
      company: 'Accel.AI',
      jobType: 'Part-time'
    },
    {
      title: 'Front-end Web Developer',
      date: 'August 2023 – December 2023',
      description:
        'Redesigned and implemented LCC OpenTech’s corporate website using Qwik, transforming it into a modern, user-friendly platform aligned with industry standards. Translated Figma designs into sleek, responsive layouts using Tailwind CSS, delivering a visually appealing and adaptable user interface.',
      company: 'LCC OpenTech',
      jobType: 'Internship'
    }
  ]

  const projects = [
    {
      name: "OpenTech LCC's Company Website",
      description:
        'Developed a modern, user-friendly corporate website for LLC OpenTech, focusing on responsive design and enhanced user engagement. Translated Figma designs into functional layouts using Qwik and Tailwind CSS, ensuring a seamless experience across devices.',
      previewLink: 'https://lccopen.tech/',
      image: opentech,
      tools: ['Qwik', 'Tailwind CSS']
    },
    {
      name: 'UCAB Forms',
      tools: ['React', 'Python', 'Material UI', 'Firebase'],
      image: ucabForms,
      previewLink: 'https://ucab-forms.vercel.app/',
      description:
        'Enhanced the platform "UCAB Forms" by integrating advanced data mining capabilities and designing an intuitive front-end interface. This allowed users to analyze survey data for patterns and trends, supporting informed decision-making and research excellence at the Universidad Católica Andrés Bello.'
    },
    {
      name: 'Mentor Match Platform',
      tools: ['React', 'Material UI', 'Firebase'],
      image: opentech,
      description:
        'Developed to facilitate meaningful connections between mentors and mentees. Utilized React.js and Material UI for an intuitive and responsive user interface and implemented real-time user authentication and data management with Firebase, ensuring efficient storage and retrieval of matching data.'
    }
  ]
  return (
    <div className="bg-settings bg-light-gradient dark:bg-dark-gradient">
      <Header />
      <div className="xl:px-80 lg:px-60 md:px-40 px-10">
        <div className="flex flex-col gap-y-36">
          {/* INTRODUCTION */}
          <div className="pt-36 flex flex-col gap-y-6 mb-14">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full size-20"
            />
            <h1 className="text-5xl font-bold text-color">Hello, I'm Maria!</h1>
            <p className="text-xl font-medium text-dark-purple-200 dark:text-white-100 w-3/4">
              Informatics Engineer from Venezuela, with hands-on experience in{' '}
              <b>web development</b>, specializing in modern{' '}
              <b>JavaScript frameworks </b>
              and user interface design.
            </p>
            {/* BADGES */}
            <div className="flex flex-row gap-x-4">
              <Badge
                href={
                  'https://drive.google.com/uc?export=download&id=1OlAwef9dd7y9DcWM-6oGlzGVsjaFmFZg'
                }
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
                  className="size-4 mb-0.25"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M12 17v-6" />
                  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                </svg>
                <p>CV</p>
              </Badge>
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
                <p>LinkedIn</p>
              </Badge>
              <Badge href={'https://github.com/mafernandag'}>
                <svg
                  class="size-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>GitHub</p>
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
                <p>mariafgg53@gmail.com</p>
              </Badge>
              <Badge href={'https://medium.com/@mafernandag'}>
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
                  class="size-4"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 9h1l3 3l3 -3h1" />
                  <path d="M8 15l2 0" />
                  <path d="M14 15l2 0" />
                  <path d="M9 9l0 6" />
                  <path d="M15 9l0 6" />
                </svg>
                <p>Medium</p>
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
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
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

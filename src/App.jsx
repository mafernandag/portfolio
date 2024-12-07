import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import '@fontsource-variable/onest'

export default function App() {
  return (
    <div className="bg-settings bg-dark-gradient xl:px-80 lg:px-60 md:px-40 px-10">
      <Header />
      <div className="flex flex-col gap-y-48">
        <div className="pt-36 flex flex-col gap-y-6">
          <h1 className="text-5xl font-bold text-dark-purple-100 dark:text-white-50">
            Hello, I'm Maria!
          </h1>
          <p className="text-xl font-medium text-dark-purple-50 dark:text-white-100 w-2/3">
            Informatics Engineer from Venezuela, with hands-on experience in{' '}
            <b>web development</b>, specializing in modern{' '}
            <b>JavaScript frameworks </b>
            and user interface design.
          </p>
          <div className="flex flex-row gap-x-4">
            <Badge
              href={'https://www.linkedin.com/in/maferguerrag/?locale=en_US'}
            >
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
          <div className="flex flex-row gap-x-3 items-center mb-4">
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
              class="size-7 text-white-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <h2 className="text-3xl font-bold text-white-50 ">
              Professional Experience
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

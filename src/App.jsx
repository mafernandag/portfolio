import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import '@fontsource-variable/onest'

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black-100 to-primary h-screen flex flex-col">
      <Header />
      <div className="xl:px-72 lg:px-60 md:px-40 px-10 pt-16 flex flex-col gap-y-6">
        <h1 className="text-5xl font-bold text-white-50">Hello, I'm Maria!</h1>
        <p className="text-xl font-medium text-white-100">
          Informatics Engineer with hands-on experience in{' '}
          <b>web development</b>, specializing in modern{' '}
          <b>JavaScript frameworks </b>
          and user interface design.
        </p>
        <Badge>Contactame</Badge>
        {/*  <p className="text-xl font-medium mt-4 text-white-100">
          Passionate about creating intuitive user experiences and maintaining
          high code quality. Proven track record in both remote and hybrid work
          environments, collaborating effectively with international teams while
          managing multiple projects.
        </p> */}
      </div>
    </div>
  )
}

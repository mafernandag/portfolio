import './App.css'
import Header from './components/Header'
import '@fontsource-variable/onest'

export default function App() {
  return (
    <>
      <Header />
      <div className="px-72 pt-16">
        <h1 className="text-5xl font-bold">Hello, I'm Maria</h1>
        <p className="text-xl font-medium mt-4">
          I'm a Informatics Engineer with hands-on experience in{' '}
          <b>web development</b>, specializing in modern{' '}
          <b>JavaScript frameworks </b>
          and user interface design.
        </p>
      </div>
    </>
  )
}


import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Tech from './sections/Tech'
import WorkExperience from './sections/WorkExperience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <WorkExperience/>
      <Tech/>
      <Clients />
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
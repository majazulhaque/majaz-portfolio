
import StarsCanvas from './components/canvas/Stars'
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
    <main className='max-w-full mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <WorkExperience/>
      <Tech/>
      <Clients />
      <Contact/>
      <Footer/>
      <StarsCanvas/>
    </main>
  )
}

export default App
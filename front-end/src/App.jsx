import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'


function App() {
  
  return (
    <div className="dark">
      <Toaster position="top-center" />
      <div
        className="
          min-h-screen scroll-smooth transition-colors duration-500
          bg-neutral-950 text-slate-100
        "
      >
        <Navbar />

        <section id="home" className="scroll-mt-20">
          <Home />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="project" className="scroll-mt-20">
          <Project />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App

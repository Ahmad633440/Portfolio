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
          bg-slate-950 text-slate-100
          bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_18%),radial-gradient(circle_at_20%_25%,_rgba(16,185,129,0.12),_transparent_22%),radial-gradient(circle_at_85%_10%,_rgba(52,211,153,0.16),_transparent_22%),#0f172a]
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

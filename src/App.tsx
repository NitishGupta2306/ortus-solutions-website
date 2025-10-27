import { ThemeProvider } from './contexts/ThemeContext'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { Hero } from './components/Hero/Hero'
import { CompanyAbout } from './components/About/CompanyAbout'
import { Team } from './components/Team/Team'
import { Services } from './components/Services/Services'
import { ProjectsGallery } from './components/Projects/ProjectsGallery'
import { Testimonial } from './components/Testimonial/Testimonial'
import { Process } from './components/Process/Process'
import { TechStack } from './components/TechStack/TechStack'
import { Contact } from './components/Contact/Contact'
import { useLenis } from './hooks/useLenis'

function App() {
  // Initialize smooth scrolling
  useLenis()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Header />

        <main id="main-content">
          <Hero />
          <CompanyAbout />
          <Team />
          <Services />
          <ProjectsGallery />
          <Testimonial />
          <Process />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

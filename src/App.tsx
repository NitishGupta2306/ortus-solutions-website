import { ThemeProvider } from './contexts/ThemeContext'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { Hero } from './components/Hero/Hero'
import { CompanyAbout } from './components/About/CompanyAbout'
import { CoreValues } from './components/About/CoreValues'
import { Team } from './components/Team/Team'
import { Services } from './components/Services/Services'
import { Projects } from './components/Projects/Projects'
import { Testimonial } from './components/Testimonial/Testimonial'
import { TestimonialOptions } from './components/Testimonial/TestimonialOptions'
import { Process } from './components/Process/Process'
import { TechStack } from './components/TechStack/TechStack'
import { Contact } from './components/Contact/Contact'
import { useLenis } from './hooks/useLenis'

function App() {
  // Initialize smooth scrolling
  useLenis()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F4FAFF] dark:bg-slate-900 transition-colors">
        <Header />

        <main id="main-content">
          <Hero /> {/* Gradient/Particles */}
          <CoreValues /> {/* dark (slate-950) */}
          <Testimonial /> {/* white */}
          <Projects /> {/* subtle (slate-50) */}
          <CompanyAbout /> {/* white */}
          <Team /> {/* subtle (slate-50) */}
          <Process /> {/* white - CHANGED */}
          <TechStack /> {/* subtle (slate-50) - CHANGED */}
          <Services /> {/* white - CHANGED */}
          <Contact /> {/* Gradient CTA */}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

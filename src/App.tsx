import { ThemeProvider } from './contexts/ThemeContext'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Testimonial } from './components/Testimonial/Testimonial'
import { Process } from './components/Process/Process'
import { TechStack } from './components/TechStack/TechStack'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
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

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { scrollToSection } from '@/utils/navigation'
import { HeroBackground3D } from './HeroBackground3D'
import { Suspense } from 'react'

export function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background with simple fallback - NO glowy circles */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4FAFF] via-[#96897B]/20 to-[#0D5C63]/30 dark:from-slate-900 dark:via-[#0D5C63]/30 dark:to-slate-900" />
        }
      >
        <HeroBackground3D />
      </Suspense>

      {/* Radial gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0D5C63]/40 via-[#0D5C63]/20 to-transparent dark:from-slate-900/60 dark:via-[#0D5C63]/30 dark:to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#040303] dark:text-[#F4FAFF] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ORTUS SOLUTIONS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-[#0D5C63] dark:text-[#96897B] font-medium mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Build once. Scale forever.
            <br />
            We automate the technical chaos so you can focus on revenue.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              Book Free Consultation
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#projects')}
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-400 dark:text-slate-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { projects } from '@/data/project'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]) // Default to first project

  const otherProjects = projects.filter(p => p.id !== selectedProject.id)

  return (
    <Section id="projects" background="dark">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Real impact, real results"
          >
            Our Projects
          </SectionHeading>
        </SlideUp>

        {/* Featured Project - Large Card */}
        <SlideUp delay={0.2}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-8 border-2 border-accent/30">
            {/* Gradient header */}
            <div className="h-3 bg-gradient-to-r from-accent via-accent-light to-accent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                      <span className="font-medium text-accent dark:text-accent-light">{selectedProject.client}</span>
                      <span>·</span>
                      <span>{selectedProject.industry}</span>
                      <span>·</span>
                      <span>{selectedProject.duration}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">The Challenge</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Our Solution</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Impact</h4>
                    <div className="space-y-4">
                      {selectedProject.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-gradient-to-br from-accent/10 to-accent-light/5 dark:from-accent/20 dark:to-accent-light/10 rounded-xl border border-accent/20"
                        >
                          <div className="text-4xl font-black bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">
                            {result.value}
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </SlideUp>

        {/* Other Projects - Horizontal Scroll */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-4">More Projects</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {otherProjects.map((proj, index) => (
                <motion.button
                  key={proj.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => setSelectedProject(proj)}
                  className="flex-shrink-0 w-80 snap-start text-left group"
                >
                  <div className="h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-accent/50 transition-all group-hover:scale-105">
                    <div className="h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />

                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-sm text-accent dark:text-accent-light mb-3">
                      {proj.client}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {proj.challenge.substring(0, 100)}...
                    </p>

                    {/* Key Result */}
                    {proj.results[0] && (
                      <div className="p-3 bg-accent/5 dark:bg-accent/10 rounded-lg mb-4">
                        <div className="text-2xl font-bold text-accent dark:text-accent-light">
                          {proj.results[0].value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {proj.results[0].metric}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-accent dark:text-accent-light text-sm font-medium group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Section>
  )
}

import { useState } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { BlobShape } from './BlobShape'
import { projects } from '@/data/project'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function ProjectsBlob() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null

  // Define unique gradients for each project - all blue theme
  const projectGradients = [
    { start: 'blue-400', end: 'blue-600' },
    { start: 'blue-500', end: 'indigo-600' },
    { start: 'indigo-400', end: 'blue-500' },
    { start: 'sky-400', end: 'blue-600' },
    { start: 'blue-600', end: 'indigo-500' },
    { start: 'indigo-500', end: 'sky-600' },
  ]

  return (
    <Section id="projects" background="dark">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Showcasing our technical excellence"
          >
            Our Projects
          </SectionHeading>
        </SlideUp>

        {/* Blob Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((proj, index) => (
            <SlideUp key={proj.id} delay={0.2 + index * 0.1}>
              <button
                onClick={() => setSelectedProject(proj.id)}
                className="group relative w-full aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900 rounded-3xl"
              >
                {/* Blob Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <BlobShape
                    colorStart={projectGradients[index % projectGradients.length].start}
                    colorEnd={projectGradients[index % projectGradients.length].end}
                    breathing={true}
                    scale={1}
                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project Info Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                    {proj.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base drop-shadow-md mb-2">
                    {proj.client}
                  </p>
                  <p className="text-white/80 text-xs md:text-sm drop-shadow-md">
                    {proj.industry}
                  </p>
                  <div className="mt-4 text-white/70 text-xs italic">
                    Click to explore
                  </div>
                </div>
              </button>
            </SlideUp>
          ))}
        </div>

        {/* Project Modal/Overlay */}
        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Close project details"
                >
                  <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span><strong>Client:</strong> {project.client}</span>
                      <span><strong>Industry:</strong> {project.industry}</span>
                      <span><strong>Duration:</strong> {project.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      The Challenge
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Our Solution
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Results
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-accent/5 dark:bg-accent/10 rounded-xl"
                        >
                          <div className="text-2xl font-bold text-accent dark:text-accent-light mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  )
}

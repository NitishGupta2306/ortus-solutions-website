import { useRef } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { Card } from '@/components/common/Card'
import { featuredProject } from '@/data/project'
import { ExternalLink, TrendingUp } from 'lucide-react'
import { useParallax } from '@/hooks/useParallax'
import { handleImageError } from '@/utils/image'

export function Portfolio() {
  const imageRef = useRef<HTMLDivElement>(null)

  // Apply subtle parallax to project image
  useParallax(imageRef, { speed: 0.3 })

  return (
    <Section id="work" background="white">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Real-world projects with measurable impact"
          >
            Featured Work
          </SectionHeading>
        </SlideUp>

        {/* Featured Project */}
        <SlideUp delay={0.2}>
          <Card glass className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div
                ref={imageRef}
                className="relative aspect-video md:aspect-square bg-gradient-to-br from-[#0D5C63]/20 to-[#96897B]/20 rounded-lg overflow-hidden"
              >
                <img
                  src={featuredProject.images[0]}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError('Project Image', 800, 600)}
                />
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center gap-2 text-sm text-[#0D5C63] dark:text-[#0D5C63] mb-2">
                  <span className="font-semibold">{featuredProject.industry}</span>
                  {featuredProject.duration && (
                    <>
                      <span>•</span>
                      <span>{featuredProject.duration}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {featuredProject.title}
                </h3>

                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Challenge
                    </h4>
                    <p>{featuredProject.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Solution
                    </h4>
                    <p>{featuredProject.solution}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-[#0D5C63]" />
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {featuredProject.results.map((result, index) => (
                        <div key={index}>
                          <p className="text-2xl font-bold text-[#0D5C63] dark:text-[#0D5C63]">
                            {result.value}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {result.metric}
                          </p>
                          {result.description && (
                            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                              {result.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0D5C63] dark:text-[#0D5C63] hover:underline"
                    >
                      View Full Case Study
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </SlideUp>

        {/* Coming Soon */}
        <SlideUp delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              More project case studies coming soon...
            </p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}

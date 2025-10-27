import { useState, memo } from 'react'
import { Project } from '@/types'
import { Card } from '@/components/common/Card'
import { ExternalLink, TrendingUp, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getTeamMembersByIds } from '@/data/team'
import { handleImageError } from '@/utils/image'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const teamMembers = getTeamMembersByIds(project.teamMemberIds)

  return (
    <Card glass hover className="h-full">
      <div className="flex flex-col h-full">
        {/* Project Image */}
        <div className="mb-4">
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
            {project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={handleImageError('Project Image', 800, 600)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>
        </div>

        {/* Industry & Duration */}
        <div className="flex items-center gap-2 text-xs text-accent dark:text-accent-light mb-2">
          <span className="font-semibold">{project.industry}</span>
          {project.duration && (
            <>
              <span>•</span>
              <span>{project.duration}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {project.title}
        </h3>

        {/* Client */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          {project.client}
        </p>

        {/* Team Members */}
        {teamMembers.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-slate-500" />
            <div className="flex gap-1 text-xs text-slate-600 dark:text-slate-400">
              {teamMembers.map((member, index) => (
                <span key={member.id}>
                  {member.name}
                  {index < teamMembers.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Result Preview */}
        {project.results.length > 0 && (
          <div className="mb-4 p-3 bg-accent/5 dark:bg-accent/10 rounded-lg">
            <p className="text-2xl font-bold text-accent dark:text-accent-light">
              {project.results[0].value}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {project.results[0].metric}
            </p>
          </div>
        )}

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="mt-auto text-sm text-accent dark:text-accent-light hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          aria-expanded={showDetails}
          aria-controls={`project-details-${project.id}`}
        >
          {showDetails ? 'Hide Details' : 'View Case Study'}
        </button>

        {/* Expandable Details */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              id={`project-details-${project.id}`}
              role="region"
              aria-label={`${project.title} case study details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Challenge
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Solution
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>

                {/* All Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All Results */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                    Results
                  </h4>
                  <div className="space-y-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="text-lg font-bold text-accent dark:text-accent-light">
                          {result.value}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
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

                {/* External Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent dark:text-accent-light hover:underline"
                  >
                    View Full Case Study
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
})

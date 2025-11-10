import { useState, memo } from 'react'
import { Project } from '@/types'
import { ExternalLink, TrendingUp, Users, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'
import { getTeamMembersByIds } from '@/data/team'
import { handleImageError } from '@/utils/image'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const teamMembers = getTeamMembersByIds(project.teamMemberIds)

  return (
    <div className="h-full w-full [perspective:1000px] group">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* FRONT FACE */}
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] text-left"
          aria-label="View project details"
        >
          <div className="h-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-2 border-transparent hover:border-[#0D5C63]/50 rounded-2xl overflow-hidden transition-all shadow-xl">
            <div className="flex flex-col md:flex-row h-full pointer-events-none">
              {/* Project Images */}
              <div className="relative md:w-1/2 h-64 md:h-full overflow-hidden bg-gradient-to-br from-[#0D5C63]/20 to-[#96897B]/20 flex items-center justify-center">
                {project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError('Project Image', 800, 600)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                    <span className="text-sm">No image available</span>
                  </div>
                )}
                {/* Flip hint badge */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <RotateCcw className="w-3 h-3" />
                  <span>Click to flip</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col md:w-1/2 h-full">
                {/* Project Title at Top */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-1">
                    {project.client}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#0D5C63] dark:text-[#0D5C63]">
                    <span className="font-semibold">{project.industry}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 gap-3 mb-4 overflow-y-auto custom-scrollbar flex-1">
                  {project.results.slice(0, 4).map((result, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-[#0D5C63]/5 to-[#96897B]/5 dark:from-[#0D5C63]/10 dark:to-[#96897B]/10 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
                    >
                      <p className="text-2xl md:text-3xl font-bold text-[#0D5C63] dark:text-[#0D5C63] mb-2">
                        {result.value}
                      </p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {result.metric}
                      </p>
                      {result.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {result.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="h-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-2 border-[#0D5C63]/30 rounded-2xl overflow-hidden shadow-xl">
            <div
              className="flex flex-col h-full p-6"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4 flex-shrink-0">
                <div className="flex items-center gap-2 text-xs text-[#0D5C63] dark:text-[#0D5C63] mb-2">
                  <span className="font-semibold">{project.industry}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.client}
                </p>
              </div>

              {/* Team Members */}
              {teamMembers.length > 0 && (
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
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

              {/* Two Column Layout */}
              <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
                {/* Left Column */}
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2">
                  <div className="space-y-4">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Challenge
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Solution
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2">
                  <div className="space-y-4">
                {/* All Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
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
                    <TrendingUp className="w-4 h-4 mr-2 text-[#0D5C63]" />
                    Results
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-base font-bold text-[#0D5C63] dark:text-[#0D5C63]">
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
                    className="inline-flex items-center text-sm text-[#0D5C63] dark:text-[#0D5C63] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Full Case Study
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
                  </div>
                </div>
              </div>

              {/* Flip back hint - Clickable */}
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 w-full cursor-pointer"
                aria-label="Return to project overview"
              >
                <p className="text-xs text-center text-[#0D5C63] dark:text-[#0D5C63] font-semibold flex items-center justify-center gap-1">
                  <RotateCcw className="w-3 h-3" />
                  Click to flip back
                </p>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
})

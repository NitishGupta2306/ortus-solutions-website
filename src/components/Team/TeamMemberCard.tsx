import { useState, memo } from 'react'
import { TeamMember } from '@/types'
import { Card } from '@/components/common/Card'
import { Linkedin, Github, Twitter, Mail, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { handleImageError } from '@/utils/image'

interface TeamMemberCardProps {
  member: TeamMember
}

export const TeamMemberCard = memo(function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Consistent teal gradient for all cards
  const gradient = 'from-[#0D5C63] to-[#0A4A4F]'  // Teal to darker teal

  return (
    <div className="h-full w-full [perspective:1000px] group">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 15 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Front of card */}
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] text-left"
          aria-label={`Read ${member.name}'s biography`}
        >
          <div className="h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#0D5C63]/50 transition-all overflow-visible flex flex-col">
            <div className="flex flex-col h-full pointer-events-none pt-20">
              {/* Photo with fun gradient border - positioned at top edge */}
              <div className="flex justify-center -mt-24 mb-2 flex-shrink-0">
                <div className={`p-1 bg-gradient-to-br ${gradient} rounded-full`}>
                  <div className="aspect-square w-32 h-32 rounded-full overflow-hidden bg-white dark:bg-slate-800">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError(member.name, 400, 400)}
                    />
                  </div>
                </div>
              </div>

              {/* Content area with padding */}
              <div className="flex flex-col flex-1 px-6 pb-6">
                {/* Name & Title */}
                <div className="text-center mb-3 flex-shrink-0 min-h-[60px] flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0D5C63] dark:text-[#0D5C63] font-bold text-sm leading-tight">
                    {member.title}
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-slate-600 dark:text-slate-300 text-sm text-center mb-4 italic flex-shrink-0 leading-snug min-h-[40px] flex items-center justify-center">
                  "{member.tagline}"
                </p>

                {/* Expertise Tags - 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 flex-shrink-0">
                  {member.expertise.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 text-xs bg-gradient-to-r ${gradient} text-white rounded-lg font-medium text-center`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Years of Experience Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-full mb-3 mx-auto flex-shrink-0`}>
                  <span className="font-bold text-lg">
                    {member.yearsOfExperience}+
                  </span>
                  <span className="text-sm">years experience</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-3 justify-center pointer-events-auto flex-shrink-0">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:scale-125 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    aria-label={`${member.name}'s LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:scale-125 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    aria-label={`${member.name}'s GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:scale-125 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    aria-label={`${member.name}'s Twitter`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.email && (
                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    className="text-slate-600 dark:text-slate-400 hover:scale-125 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    aria-label={`Email ${member.name}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>

                {/* Helper Text with icon */}
                <div className="mt-auto text-center flex-shrink-0">
                  <span className={`text-xs bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold`}>
                    👆 Click to read my story
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 border-[#0D5C63]/30 p-6 flex flex-col overflow-hidden">
            {/* Gradient header bar */}
            <div className={`w-full h-2 bg-gradient-to-r ${gradient} rounded-full mb-4 flex-shrink-0`} />

            {/* Name & Title on Back */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 flex-shrink-0">
              {member.name}
            </h3>
            <p className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold text-sm mb-4 flex-shrink-0`}>
              {member.title}
            </p>

            {/* Bio Content - Scrollable */}
            <div
              className="flex-1 min-h-0 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto h-full min-h-0 pr-2 custom-scrollbar scroll-smooth">
                <div className="space-y-3">
                  {member.bio.map((paragraph, index) => (
                    <p key={index} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Years of Experience badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-full mt-4`}>
                    <span className="font-bold text-lg">
                      {member.yearsOfExperience}+
                    </span>
                    <span className="text-sm">years experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Helper Text - Clickable area to flip back */}
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="mt-3 text-center flex-shrink-0 w-full cursor-pointer"
              aria-label={`Return to ${member.name}'s profile`}
            >
              <span className={`text-xs bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold`}>
                ← Click to flip back
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
})

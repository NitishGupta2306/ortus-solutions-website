import { useState, memo } from 'react'
import { TeamMember } from '@/types'
import { Card } from '@/components/common/Card'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { handleImageError } from '@/utils/image'

interface TeamMemberCardProps {
  member: TeamMember
}

export const TeamMemberCard = memo(function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [showBio, setShowBio] = useState(false)

  return (
    <Card glass hover className="h-full">
      <div className="flex flex-col h-full">
        {/* Photo */}
        <div className="mb-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={handleImageError(member.name, 600, 600)}
            />
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          {member.name}
        </h3>
        <p className="text-accent dark:text-accent-light font-medium text-sm mb-2">
          {member.title}
        </p>

        {/* Tagline */}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
          {member.tagline}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-4">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.email && (
            <a
              href={`mailto:${member.socialLinks.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* View Bio Button */}
        <button
          type="button"
          onClick={() => setShowBio(!showBio)}
          className="mt-auto text-sm text-accent dark:text-accent-light hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          aria-expanded={showBio}
          aria-controls={`bio-${member.id}`}
        >
          {showBio ? 'Hide Bio' : 'Read Bio'}
        </button>

        {/* Expandable Bio */}
        <AnimatePresence>
          {showBio && (
            <motion.div
              id={`bio-${member.id}`}
              role="region"
              aria-label={`${member.name}'s biography`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-sm text-slate-600 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-accent dark:text-accent-light">
                    {member.yearsOfExperience}+ years
                  </span>
                  <span>of experience</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
})

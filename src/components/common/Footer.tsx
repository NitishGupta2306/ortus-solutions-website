import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { SITE_NAME, SOCIAL_LINKS, NAV_ITEMS } from '@/utils/constants'
import { scrollToSection } from '@/utils/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{SITE_NAME}</h3>
            <p className="text-slate-400 text-sm">
              Building data pipelines & automation solutions from zero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-400 hover:text-[#0D5C63]-light transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-[#0D5C63]-light transition-[background-color,color] duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

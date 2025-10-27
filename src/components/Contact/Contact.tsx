import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ContactForm } from './ContactForm'
import { Mail, Clock, Linkedin, Github } from 'lucide-react'
import { CONTACT_EMAIL, RESPONSE_TIME, SOCIAL_LINKS } from '@/utils/constants'

export function Contact() {
  return (
    <Section id="contact" background="white">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Ready to build something amazing together?"
          >
            Let's Talk
          </SectionHeading>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <SlideUp delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Get in Touch
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I'm currently accepting new projects. Whether you need a data pipeline,
                automation solution, or custom software, I'd love to hear about your project.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent dark:text-accent-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-accent dark:text-accent-light hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent dark:text-accent-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      Response Time
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      I typically respond within {RESPONSE_TIME}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.linkedin && (
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-accent hover:text-white dark:hover:bg-accent flex items-center justify-center transition-all"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {SOCIAL_LINKS.github && (
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-accent hover:text-white dark:hover:bg-accent flex items-center justify-center transition-all"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.4}>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <ContactForm />
            </div>
          </SlideUp>
        </div>
      </Container>
    </Section>
  )
}

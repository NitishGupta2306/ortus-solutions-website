import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ContactForm } from './ContactForm'
import { Mail, Clock, Linkedin, Github } from 'lucide-react'
import { CONTACT_EMAIL, RESPONSE_TIME, SOCIAL_LINKS } from '@/utils/constants'

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#0D5C63] via-[#931F1D] to-[#0D5C63] dark:from-slate-900 dark:via-[#0D5C63] dark:to-slate-900">
      {/* Gradient Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

      <Container className="relative z-10">
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Ready to build something amazing together?"
            className="text-white"
          >
            <span className="text-white">Let's Talk</span>
          </SectionHeading>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <SlideUp delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <p className="text-violet-50 text-lg mb-8 leading-relaxed">
                I'm currently accepting new projects. Whether you need a data pipeline,
                automation solution, or custom software, I'd love to hear about your project.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-violet-100 hover:text-white hover:underline transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Response Time
                    </p>
                    <p className="text-violet-100">
                      I typically respond within {RESPONSE_TIME}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/20">
                  <p className="font-semibold text-white mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.linkedin && (
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white hover:text-violet-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {SOCIAL_LINKS.github && (
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white hover:text-violet-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.4}>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              <ContactForm />
            </div>
          </SlideUp>
        </div>
      </Container>
    </Section>
  )
}

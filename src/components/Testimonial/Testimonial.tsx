import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { Quote } from 'lucide-react'
import { testimonial } from '@/data/testimonial'

export function Testimonial() {
  return (
    <Section background="subtle">
      <Container size="md">
        <SlideUp>
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-accent dark:text-accent-light" />
            </div>

            {/* Card */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-cyan-500/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/100x100/06B6D4/FFFFFF?text=' + testimonial.author.charAt(0)
                      }}
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
                {testimonial.companyLogo && (
                  <div className="ml-auto">
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-8 opacity-60"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}

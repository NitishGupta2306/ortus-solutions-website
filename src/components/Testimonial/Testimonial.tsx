import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { Quote } from 'lucide-react'
import { testimonial } from '@/data/testimonial'

/**
 * Option 1: Large Quote + Photo Side-by-Side
 * Features: Editorial style with photo on left, quote on right, large quote icon
 */
export function Testimonial() {
  return (
    <Section id="testimonials" background="subtle">
      <Container>
        <SlideUp>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 w-full">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#0D5C63]/30 mb-3 sm:mb-4" />
              <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                {testimonial.quote.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: `"${paragraph}"` }}
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">{testimonial.author}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.title}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}

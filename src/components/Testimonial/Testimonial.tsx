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
    <Section background="subtle">
      <Container>
        <SlideUp>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex gap-8 items-center">
            <div className="flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <Quote className="w-12 h-12 text-accent/30 mb-4" />
              <div className="text-lg text-slate-600 dark:text-slate-300 mb-6 space-y-4">
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

import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { testimonial } from '@/data/testimonial'

/**
 * Option 5: Minimalist Text-First
 * Features: Large italic quote, small circular photo, clean Apple-like aesthetic
 */
export function TestimonialOption5() {
  return (
    <Section background="white">
      <Container>
        <SlideUp>
          <div className="max-w-3xl mx-auto py-12">
            <p className="text-3xl text-slate-700 dark:text-slate-200 mb-8 italic font-light leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">{testimonial.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title} · {testimonial.company}</p>
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}

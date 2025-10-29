import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { testimonial } from '@/data/testimonial'

/**
 * Option 2: Card with Prominent Photo Circle
 * Features: Centered design with large circular photo, 5-star rating, and centered text
 */
export function TestimonialOption2() {
  return (
    <Section background="white">
      <Container>
        <SlideUp>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center max-w-2xl mx-auto">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-accent/20"
            />
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic">
              "{testimonial.quote}"
            </p>
            <p className="font-bold text-slate-900 dark:text-slate-100">{testimonial.author}</p>
            <p className="text-sm text-accent dark:text-accent-light">{testimonial.title}, {testimonial.company}</p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}

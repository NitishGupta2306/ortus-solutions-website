import { Quote } from 'lucide-react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'

const sampleTestimonial = {
  quote: "Thanks to the brilliant automation designed by Nitish Gupta, this entire process has been transformed. This solution is not only flawless and efficient but also scalable.",
  author: "Pankaj Gupta",
  title: "Executive Director",
  company: "BNI Deira",
  image: "/images/client-pankaj.jpg"
}

export function TestimonialOptions() {
  return (
    <Section background="white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Testimonial Style</h2>

        <div className="space-y-16">
          {/* Option 1: Large Quote + Photo Side-by-Side */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0D5C63]">Option 1: Large Quote + Photo Side-by-Side</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={sampleTestimonial.image}
                  alt={sampleTestimonial.author}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <Quote className="w-12 h-12 text-[#0D5C63]/30 mb-4" />
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{sampleTestimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{sampleTestimonial.author}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{sampleTestimonial.title}, {sampleTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Card with Prominent Photo Circle */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0D5C63]">Option 2: Card with Prominent Photo Circle</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center max-w-2xl mx-auto">
              <img
                src={sampleTestimonial.image}
                alt={sampleTestimonial.author}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-[#0D5C63]/20"
              />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic">
                "{sampleTestimonial.quote}"
              </p>
              <p className="font-bold text-slate-900 dark:text-slate-100">{sampleTestimonial.author}</p>
              <p className="text-sm text-[#0D5C63] dark:text-[#0D5C63]">{sampleTestimonial.title}, {sampleTestimonial.company}</p>
            </div>
          </div>

          {/* Option 3: Horizontal Split with Accent Bar */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0D5C63]">Option 3: Horizontal Split with Accent Bar</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex overflow-hidden">
              <div className="w-2 bg-gradient-to-b from-[#0D5C63] to-[#96897B] flex-shrink-0" />
              <div className="p-8 flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={sampleTestimonial.image}
                    alt={sampleTestimonial.author}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-lg text-slate-600 dark:text-slate-300 italic">
                      "{sampleTestimonial.quote}"
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 dark:text-slate-100">{sampleTestimonial.author}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{sampleTestimonial.title}, {sampleTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Option 4: Glassmorphism with Gradient Background */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0D5C63]">Option 4: Glassmorphism with Gradient</h3>
            <div className="relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-[#0D5C63]/10 to-[#96897B]/10 backdrop-blur-sm border border-[#0D5C63]/20">
              <Quote className="absolute top-4 right-4 w-16 h-16 text-[#0D5C63]/10" />
              <div className="relative z-10">
                <p className="text-xl text-slate-700 dark:text-slate-200 mb-6 italic">
                  "{sampleTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={sampleTestimonial.image}
                    alt={sampleTestimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0D5C63]"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{sampleTestimonial.author}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{sampleTestimonial.title}, {sampleTestimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Option 5: Minimalist Text-First */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0D5C63]">Option 5: Minimalist Text-First</h3>
            <div className="max-w-3xl mx-auto py-12">
              <p className="text-3xl text-slate-700 dark:text-slate-200 mb-8 italic font-light leading-relaxed">
                "{sampleTestimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={sampleTestimonial.image}
                  alt={sampleTestimonial.author}
                  className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{sampleTestimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{sampleTestimonial.title} · {sampleTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Choose your preferred style and I'll implement it!
          </p>
        </div>
      </Container>
    </Section>
  )
}

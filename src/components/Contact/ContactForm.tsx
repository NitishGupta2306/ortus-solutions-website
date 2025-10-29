import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormData } from '@/utils/validation'
import { Button } from '@/components/common/Button'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    setSubmitStatus('loading')

    try {
      // TODO: Implement actual form submission (EmailJS, Formspree, or custom API)
      // For now, data is unused until we implement the actual submission
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Form submission error:', error)
      }
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-200">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-200">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company (Optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
          Company <span className="text-blue-100">(optional)</span>
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
          placeholder="Your company"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Project Description *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 resize-none"
          placeholder="Tell me about your project and what you need help with..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-200">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        isLoading={submitStatus === 'loading'}
        disabled={submitStatus === 'loading'}
      >
        <span className="flex items-center justify-center gap-2">
          {submitStatus === 'loading' && (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
          {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
        </span>
      </Button>

      {/* Success/Error Messages with animations */}
      <AnimatePresence mode="wait">
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="flex items-center gap-2 p-4 bg-success-bg dark:bg-success-bg-dark text-success dark:text-success-light rounded-lg"
            role="alert"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            <p className="text-sm">
              Message sent successfully! I'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="flex items-center gap-2 p-4 bg-error-bg dark:bg-error-bg-dark text-error dark:text-error-light rounded-lg"
            role="alert"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <XCircle className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            <p className="text-sm">
              Something went wrong. Please try again or email me directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

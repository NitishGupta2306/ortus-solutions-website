import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormData } from '@/utils/validation'
import { Button } from '@/components/common/Button'
import { CheckCircle, XCircle } from 'lucide-react'

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

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')

    try {
      // TODO: Implement actual form submission (EmailJS, Formspree, or custom API)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
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
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-error dark:text-error-light">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-error dark:text-error-light">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company (Optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Company <span className="text-slate-400">(optional)</span>
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Your company"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Project Description *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Tell me about your project and what you need help with..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-error dark:text-error-light">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={submitStatus === 'loading'}
        disabled={submitStatus === 'loading'}
      >
        {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-success-bg dark:bg-success-bg-dark text-success dark:text-success-light rounded-lg" role="alert">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">
            Message sent successfully! I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-error-bg dark:bg-error-bg-dark text-error dark:text-error-light rounded-lg" role="alert">
          <XCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">
            Something went wrong. Please try again or email me directly.
          </p>
        </div>
      )}
    </form>
  )
}

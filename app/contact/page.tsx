'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/lib/animations'
import { submitToFormspree, validateForm, type FormSubmission } from '@/lib/formspree-adapter'
import { FORMPREE_CONFIG } from '@/lib/constants'

/**
 * Contact page with Formspree integration
 * Includes form validation and submission handling
 */
export default function ContactPage() {
    const [formData, setFormData] = useState<FormSubmission>({
        name: '',
        email: '',
        message: '',
        type: 'pitch',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{
        success?: boolean
        message?: string
    }>({})

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate form
        const validation = validateForm(formData)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            const result = await submitToFormspree(
                FORMPREE_CONFIG.pitchFormId,
                formData
            )

            setSubmitResult({
                success: result.success,
                message: result.message,
            })

            if (result.success) {
                setFormData({ name: '', email: '', message: '', type: 'pitch' })
            }
        } catch (error) {
            setSubmitResult({
                success: false,
                message: 'An unexpected error occurred. Please try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariant}
                >
                    {/* Page Header */}
                    <header className="mb-12 text-center">
                        <h1 className="text-5xl font-bold text-platinum mb-6">
                            Pitch Your Venture
                        </h1>
                        <p className="text-gray-muted text-lg">
                            We review every submission with discretion and strategic intent.
                        </p>
                    </header>

                    {/* Contact Form */}
                    <div className="glass-dark p-8">
                        {submitResult.message && (
                            <div
                                className={`mb-6 p-4 rounded ${submitResult.success
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                    }`}
                            >
                                {submitResult.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-platinum mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-carbon border ${errors.name ? 'border-red-500' : 'border-graphite'
                                        } text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors`}
                                    placeholder="Full name"
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-platinum mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-carbon border ${errors.email ? 'border-red-500' : 'border-graphite'
                                        } text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors`}
                                    placeholder="professional@domain.com"
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-platinum mb-2"
                                >
                                    Venture Summary
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className={`w-full px-4 py-3 bg-carbon border ${errors.message ? 'border-red-500' : 'border-graphite'
                                        } text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors resize-none`}
                                    placeholder="Describe your venture, market opportunity, and team expertise..."
                                    disabled={isSubmitting}
                                />
                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gold-accent text-carbon font-medium hover:bg-gold-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Pitch Your Venture'
                                )}
                            </button>
                        </form>

                        {/* Form Note */}
                        <div className="mt-8 pt-8 border-t border-graphite">
                            <p className="text-sm text-gray-muted text-center">
                                All submissions are reviewed within 48 hours. We maintain strict confidentiality.
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 glass-dark p-8">
                        <h3 className="text-xl font-bold text-platinum mb-6">
                            Strategic Partnerships
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm text-gold-accent font-medium mb-2">
                                    For Portfolio Companies
                                </h4>
                                <p className="text-gray-muted">
                                    Existing portfolio companies have direct access to our operating partners and network resources.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gold-accent font-medium mb-2">
                                    For Strategic Partners
                                </h4>
                                <p className="text-gray-muted">
                                    Institutional partners and family offices can contact us through secure channels.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
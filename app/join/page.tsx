'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations'
import { FORMPREE_CONFIG } from '@/lib/constants'

interface TalentFormData {
    name: string
    email: string
    linkedin: string
    expertise: string
    message: string
}

export default function JoinPage() {
    const [formData, setFormData] = useState<TalentFormData>({
        name: '',
        email: '',
        linkedin: '',
        expertise: '',
        message: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{
        success?: boolean
        message?: string
    }>({})

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.linkedin.trim()) {
            newErrors.linkedin = 'LinkedIn profile is required'
        } else if (!formData.linkedin.includes('linkedin.com')) {
            newErrors.linkedin = 'Please enter a valid LinkedIn URL'
        }

        if (!formData.expertise) {
            newErrors.expertise = 'Please select your primary expertise'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await fetch(`https://formspree.io/f/${FORMPREE_CONFIG.contactFormId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: 'New Talent Protocol Application',
                    type: 'talent-protocol',
                }),
            })

            if (response.ok) {
                setSubmitResult({
                    success: true,
                    message: 'Application received. We review all submissions personally and will reach out if there is alignment.',
                })
                setFormData({
                    name: '',
                    email: '',
                    linkedin: '',
                    expertise: '',
                    message: '',
                })
            } else {
                setSubmitResult({
                    success: false,
                    message: 'Submission failed. Please try again.',
                })
            }
        } catch {
            setSubmitResult({
                success: false,
                message: 'Network error. Please check your connection.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const expertiseAreas = [
        'Technology & Engineering',
        'Finance & Investment',
        'Operations & Strategy',
        'Legal & Compliance',
        'Marketing & Growth',
        'Design & Creative',
        'Sales & Partnerships',
        'Data & Analytics',
        'Other',
    ]

    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainerVariant}
                    className="max-w-4xl mx-auto"
                >
                    {/* Hero Section */}
                    <motion.header
                        variants={fadeUpVariant}
                        className="mb-16 text-center"
                    >
                        <p className="text-gold-accent font-mono text-sm tracking-wider mb-4">
                            INVITATION ONLY
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold text-platinum mb-8">
                            Join the Mayalok<br />Talent Protocol
                        </h1>
                        <div className="w-32 h-px bg-gold-accent mx-auto mb-8" />
                        <p className="text-xl text-gray-muted max-w-2xl mx-auto leading-relaxed">
                            We do not hire. We assemble networks of exceptional operators, investors, and builders who share our vision of creating asymmetric outcomes.
                        </p>
                    </motion.header>

                    {/* Value Proposition */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={1}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-dark p-6 text-center">
                                <div className="text-3xl font-bold text-gold-accent mb-2">Access</div>
                                <p className="text-gray-muted text-sm">
                                    Direct pipeline to portfolio companies seeking elite talent
                                </p>
                            </div>
                            <div className="glass-dark p-6 text-center">
                                <div className="text-3xl font-bold text-gold-accent mb-2">Equity</div>
                                <p className="text-gray-muted text-sm">
                                    Participation opportunities in early-stage ventures
                                </p>
                            </div>
                            <div className="glass-dark p-6 text-center">
                                <div className="text-3xl font-bold text-gold-accent mb-2">Intelligence</div>
                                <p className="text-gray-muted text-sm">
                                    Curated insights on emerging markets and opportunities
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Who We Seek */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={2}
                        className="mb-16"
                    >
                        <div className="glass-dark p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-platinum mb-6">
                                Who We Seek
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-muted">
                                <div className="flex items-start">
                                    <span className="text-gold-accent mr-3 mt-1">→</span>
                                    <p>Operators who have built and scaled ventures from zero to meaningful revenue</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gold-accent mr-3 mt-1">→</span>
                                    <p>Technical leaders with deep expertise in AI, security, or infrastructure</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gold-accent mr-3 mt-1">→</span>
                                    <p>Finance professionals with institutional investing or M&A experience</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gold-accent mr-3 mt-1">→</span>
                                    <p>Domain experts in creator economy, HR-tech, or risk management</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={3}
                    >
                        <div className="glass-dark p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-platinum mb-2">
                                Submit Your Profile
                            </h2>
                            <p className="text-gray-muted mb-8">
                                All submissions are reviewed personally. We do not use automated screening.
                            </p>

                            {submitResult.message && (
                                <div
                                    className={`mb-8 p-4 rounded ${submitResult.success
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                        }`}
                                >
                                    {submitResult.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-platinum mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-carbon border ${errors.name ? 'border-red-500' : 'border-graphite'} text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors`}
                                            placeholder="Your full name"
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-platinum mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-carbon border ${errors.email ? 'border-red-500' : 'border-graphite'} text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors`}
                                            placeholder="you@company.com"
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-platinum mb-2">
                                        LinkedIn Profile *
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-carbon border ${errors.linkedin ? 'border-red-500' : 'border-graphite'} text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors`}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        disabled={isSubmitting}
                                    />
                                    {errors.linkedin && <p className="mt-2 text-sm text-red-400">{errors.linkedin}</p>}
                                </div>

                                {/* Expertise */}
                                <div>
                                    <label htmlFor="expertise" className="block text-sm font-medium text-platinum mb-2">
                                        Primary Expertise *
                                    </label>
                                    <select
                                        id="expertise"
                                        name="expertise"
                                        value={formData.expertise}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-carbon border ${errors.expertise ? 'border-red-500' : 'border-graphite'} text-platinum focus:outline-none focus:border-gold-accent transition-colors`}
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Select your area of expertise</option>
                                        {expertiseAreas.map((area) => (
                                            <option key={area} value={area}>{area}</option>
                                        ))}
                                    </select>
                                    {errors.expertise && <p className="mt-2 text-sm text-red-400">{errors.expertise}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-platinum mb-2">
                                        Why Mayalok? <span className="text-gray-muted font-normal">(Optional)</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-carbon border border-graphite text-platinum placeholder-gray-muted focus:outline-none focus:border-gold-accent transition-colors resize-none"
                                        placeholder="What draws you to Mayalok Ventures? What unique value do you bring?"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Submit */}
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
                                        'Request Access to the Network'
                                    )}
                                </button>
                            </form>

                            {/* Note */}
                            <div className="mt-8 pt-8 border-t border-graphite">
                                <p className="text-sm text-gray-muted text-center">
                                    By submitting, you agree to our Privacy Policy. We never share your information with third parties without consent.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={4}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-gray-muted font-mono">
                            &quot;The strength of the network is measured not by its size, but by the quality of its nodes.&quot;
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

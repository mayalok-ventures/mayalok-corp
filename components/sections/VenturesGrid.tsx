'use client'

import { motion } from 'framer-motion'
import { VENTURES } from '@/lib/constants'
import { fadeUpVariant, cardHoverVariant, staggerContainerVariant } from '@/lib/animations'

/**
 * Bento grid layout for ventures showcase
 * Implements premium hover effects and animations
 */
export default function VenturesGrid() {
    return (
        <section className="py-24 bg-carbon">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainerVariant}
                >
                    {/* Section Header */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
                            Venture Ecosystem
                        </h2>
                        <p className="text-gray-muted text-lg max-w-2xl mx-auto">
                            Strategic holdings engineered for asymmetric outcomes
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VENTURES.map((venture, index) => (
                            <motion.div
                                key={venture.id}
                                variants={fadeUpVariant}
                                custom={index}
                                whileHover="hover"
                                initial="initial"
                                className={`glass-dark p-8 transition-all duration-300 ${index === 0 ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                <motion.div variants={cardHoverVariant}>
                                    {/* Venture Header */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-platinum mb-2">
                                            {venture.name}
                                        </h3>
                                        <p className="text-gold-accent font-medium">
                                            {venture.tagline}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-muted leading-relaxed mb-8">
                                        {venture.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-px bg-graphite" />
                                        <span className="text-xs font-mono text-gray-muted uppercase tracking-wider">
                                            Strategic Holding
                                        </span>
                                        <div className="w-12 h-px bg-graphite" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Grid Note */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={VENTURES.length}
                        className="mt-16 text-center"
                    >
                        <p className="text-sm text-gray-muted font-mono">
                            Each venture operates with full autonomy while benefiting from shared intelligence networks.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations'

/**
 * Manifesto section with executive messaging
 */
export default function Manifesto() {
    const manifestoPoints = [
        {
            title: 'Wealth With Intent',
            content: 'We do not build companies for vanity metrics. We architect ventures that compound capital, influence, and long-term relevance.'
        },
        {
            title: 'Asymmetric Outcomes',
            content: 'Mayalok Ventures exists to create asymmetric outcomes in markets most founders misunderstand.'
        }
    ]

    return (
        <section className="py-24 bg-void">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainerVariant}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
                            Strategy & Manifesto
                        </h2>
                        <div className="w-24 h-px bg-gold-accent mx-auto" />
                    </motion.div>

                    {/* Manifesto Points */}
                    <div className="space-y-12">
                        {manifestoPoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                variants={fadeUpVariant}
                                custom={index + 1}
                                className="glass-dark p-8 relative"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-6 h-px bg-gold-accent" />
                                <div className="absolute top-0 left-0 h-6 w-px bg-gold-accent" />
                                <div className="absolute bottom-0 right-0 w-6 h-px bg-gold-accent" />
                                <div className="absolute bottom-0 right-0 h-6 w-px bg-gold-accent" />

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gold-accent mb-6">
                                    {point.title}
                                </h3>
                                <blockquote className="text-xl text-platinum leading-relaxed italic">
                                    {point.content}
                                </blockquote>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={3}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-muted text-lg">
                            We partner with founders who understand that true scale comes from depth, not breadth.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
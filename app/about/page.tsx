'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations'

/**
 * About page with strategy and manifesto
 */
export default function AboutPage() {
    const principles = [
        {
            title: 'Strategic Patience',
            description: 'We measure timelines in decades, not quarters. Our investments are structured for generational impact.'
        },
        {
            title: 'Intellectual Rigor',
            description: 'Every decision is backed by deep research, competitive analysis, and scenario planning.'
        },
        {
            title: 'Operational Excellence',
            description: 'We build systems that scale exponentially while maintaining quality and integrity.'
        },
        {
            title: 'Network Intelligence',
            description: 'Our portfolio companies benefit from shared knowledge, talent, and strategic partnerships.'
        }
    ]

    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainerVariant}
                    className="max-w-6xl mx-auto"
                >
                    {/* Page Header */}
                    <motion.header
                        variants={fadeUpVariant}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-platinum mb-8">
                            Strategy & Manifesto
                        </h1>
                        <div className="w-32 h-px bg-gold-accent mx-auto mb-8" />
                        <p className="text-2xl text-gray-muted max-w-3xl mx-auto leading-relaxed">
                            We architect ventures that compound capital, influence, and long-term relevance.
                        </p>
                    </motion.header>

                    {/* Manifesto Section */}
                    <motion.section
                        variants={fadeUpVariant}
                        custom={1}
                        className="mb-24"
                    >
                        <div className="glass-dark p-12 relative">
                            {/* Corner decorations */}
                            <div className="absolute top-0 left-0 w-8 h-px bg-gold-accent" />
                            <div className="absolute top-0 left-0 h-8 w-px bg-gold-accent" />
                            <div className="absolute bottom-0 right-0 w-8 h-px bg-gold-accent" />
                            <div className="absolute bottom-0 right-0 h-8 w-px bg-gold-accent" />

                            <h2 className="text-3xl font-bold text-gold-accent mb-8">
                                Wealth With Intent
                            </h2>
                            <div className="space-y-8">
                                <blockquote className="text-2xl text-platinum leading-relaxed italic border-l-4 border-gold-accent pl-8 py-4">
                                    We do not build companies for vanity metrics. We architect ventures that compound capital, influence, and long-term relevance.
                                </blockquote>
                                <blockquote className="text-2xl text-platinum leading-relaxed italic border-l-4 border-gold-accent pl-8 py-4">
                                    Mayalok Ventures exists to create asymmetric outcomes in markets most founders misunderstand.
                                </blockquote>
                            </div>
                        </div>
                    </motion.section>

                    {/* Core Principles */}
                    <motion.section
                        variants={fadeUpVariant}
                        custom={2}
                        className="mb-24"
                    >
                        <h2 className="text-4xl font-bold text-platinum mb-12 text-center">
                            Core Principles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {principles.map((principle, index) => (
                                <div key={principle.title} className="group">
                                    <div className="glass-dark p-8 hover:gold-glow transition-all duration-300">
                                        <div className="flex items-start mb-6">
                                            <span className="text-sm font-mono text-gold-accent mr-4">
                                                0{index + 1}
                                            </span>
                                            <h3 className="text-xl font-bold text-platinum">
                                                {principle.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-muted leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* The Mayalok Advantage */}
                    <motion.section
                        variants={fadeUpVariant}
                        custom={3}
                        className="mb-24"
                    >
                        <div className="glass-dark p-12 relative">
                            <div className="absolute top-0 left-0 w-8 h-px bg-gold-accent" />
                            <div className="absolute top-0 left-0 h-8 w-px bg-gold-accent" />
                            <div className="absolute bottom-0 right-0 w-8 h-px bg-gold-accent" />
                            <div className="absolute bottom-0 right-0 h-8 w-px bg-gold-accent" />

                            <h2 className="text-3xl font-bold text-gold-accent mb-4">
                                The Mayalok Advantage
                            </h2>
                            <p className="text-xl text-platinum mb-8">The Ecosystem Effect</p>
                            
                            <p className="text-lg text-gray-muted leading-relaxed mb-8">
                                Unlike traditional venture capital that offers passive investment, Mayalok Ventures operates as an integrated <span className="text-platinum font-medium">Venture Studio</span>.
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-2 border-gold-accent pl-6">
                                    <h3 className="text-lg font-bold text-platinum mb-2">Shared Intelligence</h3>
                                    <p className="text-gray-muted">
                                        Data from Pramaan&apos;s talent markets informs Risk Fortress&apos;s operational audits.
                                    </p>
                                </div>
                                <div className="border-l-2 border-gold-accent pl-6">
                                    <h3 className="text-lg font-bold text-platinum mb-2">Resource Velocity</h3>
                                    <p className="text-gray-muted">
                                        Portfolio companies leverage shared resources—legal, branding (Mayavi), and tech—drastically lowering the &apos;Cost of Experimentation.&apos;
                                    </p>
                                </div>
                                <div className="border-l-2 border-gold-accent pl-6">
                                    <h3 className="text-lg font-bold text-platinum mb-2">Risk-Adjusted Alpha</h3>
                                    <p className="text-gray-muted">
                                        By controlling the execution layer, we de-risk early-stage ventures, ensuring higher survival rates compared to market averages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Investment Thesis */}
                    <motion.section
                        variants={fadeUpVariant}
                        custom={4}
                        className="mb-24"
                    >
                        <div className="glass-dark p-12">
                            <h2 className="text-3xl font-bold text-gold-accent mb-4">
                                Thesis: The Digital Infrastructure of Tomorrow
                            </h2>
                            
                            <p className="text-lg text-gray-muted leading-relaxed mb-8">
                                We believe the next decade of wealth creation lies in the <span className="text-platinum font-medium">&apos;Boring Middle&apos;</span>—the infrastructure layers that enable the digital economy. We do not chase trends. We build the picks and shovels:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-carbon p-6 border border-graphite">
                                    <h3 className="text-lg font-bold text-platinum mb-3">Trust Infrastructure</h3>
                                    <p className="text-gold-accent font-mono text-sm">Pramaan, Risk Fortress</p>
                                </div>
                                <div className="bg-carbon p-6 border border-graphite">
                                    <h3 className="text-lg font-bold text-platinum mb-3">Creator Economy Utilities</h3>
                                    <p className="text-gold-accent font-mono text-sm">Deeplink, Mayavi</p>
                                </div>
                                <div className="bg-carbon p-6 border border-graphite">
                                    <h3 className="text-lg font-bold text-platinum mb-3">Knowledge Systems</h3>
                                    <p className="text-gold-accent font-mono text-sm">GuruMaya</p>
                                </div>
                            </div>

                            <p className="text-lg text-platinum leading-relaxed border-l-4 border-gold-accent pl-6 py-2">
                                Our focus is on high-margin, B2B scalable engines that generate cash flow, not just valuation paper gains.
                            </p>
                        </div>
                    </motion.section>

                    {/* Closing */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={5}
                        className="text-center"
                    >
                        <p className="text-xl text-gray-muted max-w-2xl mx-auto mb-12">
                            Our approach combines the rigor of institutional investing with the agility of a venture studio.
                        </p>
                        <div className="w-24 h-px bg-graphite mx-auto" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
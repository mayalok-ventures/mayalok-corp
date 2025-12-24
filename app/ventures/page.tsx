'use client'

import { motion } from 'framer-motion'
import { VENTURES } from '@/lib/constants'
import { fadeUpVariant, staggerContainerVariant, cardHoverVariant } from '@/lib/animations'

/**
 * Ventures page with detailed bento grid
 */
export default function VenturesPage() {
    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainerVariant}
                >
                    {/* Page Header */}
                    <motion.header
                        variants={fadeUpVariant}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-platinum mb-6">
                            Strategic Portfolio
                        </h1>
                        <p className="text-xl text-gray-muted max-w-3xl mx-auto">
                            A curated ecosystem of ventures engineered for market leadership and asymmetric returns.
                        </p>
                    </motion.header>

                    {/* Ventures Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VENTURES.map((venture, index) => (
                            <motion.article
                                key={venture.id}
                                variants={fadeUpVariant}
                                custom={index}
                                whileHover="hover"
                                initial="initial"
                                className="glass-dark p-8 h-full flex flex-col"
                            >
                                <motion.div variants={cardHoverVariant} className="flex-grow">
                                    {/* Venture Number */}
                                    <div className="mb-6">
                                        <span className="text-xs font-mono text-gold-accent tracking-widest">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Venture Info */}
                                    <h2 className="text-3xl font-bold text-platinum mb-4">
                                        {venture.name}
                                    </h2>
                                    <h3 className="text-lg text-gold-accent font-medium mb-6">
                                        {venture.tagline}
                                    </h3>
                                    <p className="text-gray-muted leading-relaxed mb-8 flex-grow">
                                        {venture.description}
                                    </p>

                                    {/* Status Indicator */}
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                                        <span className="text-sm text-gray-muted font-mono">
                                            Active Portfolio Company
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Investment Thesis */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={VENTURES.length}
                        className="mt-24 glass-dark p-8 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-platinum mb-6">
                            Investment Thesis
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-gold-accent font-medium mb-3">Market Depth</h4>
                                <p className="text-gray-muted text-sm">
                                    We target markets with structural complexity that creates durable moats.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-gold-accent font-medium mb-3">Founder Quality</h4>
                                <p className="text-gray-muted text-sm">
                                    We back domain experts with exceptional technical and operational talent.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-gold-accent font-medium mb-3">Network Effects</h4>
                                <p className="text-gray-muted text-sm">
                                    Every venture must demonstrate clear compounding advantages over time.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
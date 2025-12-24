'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParticleNetwork from '@/components/ui/ParticleNetwork'
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations'

/**
 * Hero section component
 * Features particle animation and premium typography
 */
export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 bg-carbon">
                <ParticleNetwork />
                {/* Abstract wireframe overlay */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <path
                            d="M20,20 L80,20 L80,80 L20,80 Z"
                            stroke="currentColor"
                            strokeWidth="0.2"
                            fill="none"
                            className="text-gold-accent"
                        />
                        <path
                            d="M30,30 L70,30 L70,70 L30,70 Z"
                            stroke="currentColor"
                            strokeWidth="0.15"
                            fill="none"
                            className="text-gold-accent"
                        />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    variants={staggerContainerVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    >
                        <span className="block text-platinum">Architecting the</span>
                        <span className="block text-gold-accent">Future of Reality</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        variants={fadeUpVariant}
                        custom={1}
                        className="text-xl md:text-2xl text-gray-muted max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        A venture studio operating at the intersection of technology, risk intelligence, and human potential.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUpVariant}
                        custom={2}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/ventures/"
                            className="glass-dark px-8 py-3 text-platinum font-medium hover:gold-glow transition-all duration-300"
                        >
                            Explore the Ecosystem
                        </Link>
                        <Link
                            href="/contact/"
                            className="px-8 py-3 bg-gold-accent text-carbon font-medium hover:bg-gold-accent/90 transition-colors"
                        >
                            Pitch a Venture
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border border-gray-muted rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-gold-accent rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    )
}
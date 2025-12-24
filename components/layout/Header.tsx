'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAVIGATION } from '@/lib/constants'
import { slideInVariant } from '@/lib/animations'

/**
 * Main navigation header component
 * Implements glassmorphism design with gold accents
 */
export default function Header() {
    const pathname = usePathname()

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={slideInVariant}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="container mx-auto px-6 py-4">
                <nav className="glass-dark rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-xl font-semibold tracking-tight text-platinum hover:text-gold-accent transition-colors"
                        >
                            Mayalok<span className="text-gold-accent font-light">Ventures</span>
                        </Link>

                        {/* Navigation */}
                        <ul className="hidden md:flex items-center space-x-8">
                            {NAVIGATION.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive
                                                    ? 'text-gold-accent'
                                                    : 'text-gray-muted hover:text-platinum'
                                                }`}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeIndicator"
                                                    className="absolute inset-0 -z-10 bg-gold-accent/10 rounded"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Mobile menu placeholder */}
                        <button className="md:hidden text-gray-muted hover:text-platinum">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}
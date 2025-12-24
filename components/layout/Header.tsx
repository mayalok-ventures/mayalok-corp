'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION } from '@/lib/constants'
import { slideInVariant } from '@/lib/animations'

/**
 * Main navigation header component
 * Implements glassmorphism design with gold accents
 */
export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

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
                            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-platinum hover:text-gold-accent transition-colors"
                            onClick={closeMenu}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Mayalok Ventures"
                                width={40}
                                height={40}
                                className="w-8 h-8 md:w-10 md:h-10"
                            />
                            <span className="hidden sm:inline">
                                Mayalok<span className="text-gold-accent font-light">Ventures</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
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

                        {/* Mobile menu button */}
                        <button 
                            type="button"
                            className="md:hidden text-gray-muted hover:text-platinum p-2 z-50"
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                toggleMenu()
                            }}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <AnimatePresence mode="wait">
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden"
                            >
                                <ul className="flex flex-col space-y-2 pt-4 mt-4 border-t border-graphite">
                                    {NAVIGATION.map((item) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className={`block px-4 py-3 text-base font-medium rounded transition-colors ${isActive
                                                            ? 'text-gold-accent bg-gold-accent/10'
                                                            : 'text-gray-muted hover:text-platinum hover:bg-graphite/50'
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </motion.header>
    )
}
import Link from 'next/link'
import { NAVIGATION, VENTURES } from '@/lib/constants'

/**
 * Site footer component
 * Minimal design with essential links
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-graphite bg-carbon">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-semibold text-platinum mb-4">
                            Mayalok Ventures
                        </h3>
                        <p className="text-gray-muted text-sm">
                            Architecting the Future of Reality
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-platinum font-medium mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {NAVIGATION.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-muted hover:text-platinum text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/privacy/"
                                    className="text-gray-muted hover:text-platinum text-sm transition-colors"
                                >
                                    Privacy & Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ventures */}
                    <div>
                        <h4 className="text-platinum font-medium mb-4">Ventures</h4>
                        <ul className="space-y-2">
                            {VENTURES.map((venture) => (
                                <li key={venture.id}>
                                    <Link
                                        href={venture.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-muted hover:text-gold-accent text-sm transition-colors inline-flex items-center"
                                    >
                                        {venture.name}
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-platinum font-medium mb-4">Connect</h4>
                        <div className="space-y-3">
                            <div className="flex items-start text-gray-muted text-sm">
                                <svg className="w-4 h-4 mr-2 mt-0.5 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Headquarters – Noida, India</span>
                            </div>
                            <p className="text-gray-muted text-sm">
                                For venture inquiries:
                            </p>
                            <Link
                                href="/contact/"
                                className="inline-flex items-center text-gold-accent hover:text-gold-accent/80 text-sm font-medium transition-colors"
                            >
                                Pitch Your Venture
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-graphite mt-8 pt-8 text-center">
                    <p className="text-gray-muted text-sm">
                        © {currentYear} Mayalok Ventures. All rights reserved.
                    </p>
                    <p className="text-gray-muted text-xs mt-2">
                        Designed for strategic partners and visionary founders.
                    </p>
                </div>
            </div>
        </footer>
    )
}
import { SITE_METADATA } from '@/lib/constants'

/**
 * Privacy and compliance page
 * Professional trust signal for investors
 */
export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Page Header */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-platinum mb-6">
                        Privacy & Compliance
                    </h1>
                    <div className="w-24 h-px bg-gold-accent" />
                </header>

                {/* Content */}
                <div className="space-y-8">
                    <section className="glass-dark p-8">
                        <h2 className="text-2xl font-bold text-platinum mb-4">
                            Confidentiality Commitment
                        </h2>
                        <p className="text-gray-muted leading-relaxed">
                            Mayalok Ventures maintains the highest standards of confidentiality and data protection.
                            All information shared with us through any channel is treated with strict discretion and
                            protected by comprehensive security protocols.
                        </p>
                    </section>

                    <section className="glass-dark p-8">
                        <h2 className="text-2xl font-bold text-platinum mb-4">
                            Information Security
                        </h2>
                        <p className="text-gray-muted leading-relaxed">
                            We employ enterprise-grade security measures to protect sensitive information.
                            Our digital infrastructure is regularly audited and maintained to meet institutional standards.
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                                <span className="text-gold-accent mr-3">•</span>
                                <span className="text-gray-muted">End-to-end encryption for all communications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gold-accent mr-3">•</span>
                                <span className="text-gray-muted">Regular security audits and penetration testing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gold-accent mr-3">•</span>
                                <span className="text-gray-muted">Compliance with global data protection regulations</span>
                            </li>
                        </ul>
                    </section>

                    <section className="glass-dark p-8">
                        <h2 className="text-2xl font-bold text-platinum mb-4">
                            Investor Relations
                        </h2>
                        <p className="text-gray-muted leading-relaxed">
                            We provide transparent reporting and communication to our investors while maintaining
                            the confidentiality of our portfolio companies and strategic operations.
                        </p>
                    </section>

                    <section className="glass-dark p-8">
                        <h2 className="text-2xl font-bold text-platinum mb-4">
                            Legal Framework
                        </h2>
                        <p className="text-gray-muted leading-relaxed">
                            Mayalok Ventures operates under rigorous legal frameworks designed to protect all stakeholders.
                            Our agreements are structured to ensure clarity, fairness, and long-term alignment.
                        </p>
                    </section>

                    {/* Compliance Footer */}
                    <div className="mt-12 pt-8 border-t border-graphite">
                        <p className="text-sm text-gray-muted text-center">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} •
                            {SITE_METADATA.title} • All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
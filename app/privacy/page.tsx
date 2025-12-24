'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_METADATA } from '@/lib/constants'

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen: boolean
    onToggle: () => void
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border border-graphite">
            <button
                type="button"
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-carbon hover:bg-graphite/30 transition-colors"
            >
                <span className="text-lg font-medium text-platinum">{title}</span>
                <svg
                    className={`w-5 h-5 text-gold-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-6 bg-carbon/50 border-t border-graphite">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function PrivacyPage() {
    const [openSection, setOpenSection] = useState<string | null>(null)

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section)
    }

    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Page Header */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-platinum mb-6">
                        Privacy Policy & Data Protection
                    </h1>
                    <div className="w-24 h-px bg-gold-accent mb-6" />
                    <p className="text-gray-muted">
                        Effective Date: January 1, 2024 | Last Updated: December 2024
                    </p>
                </header>

                {/* Introduction */}
                <div className="mb-8 p-6 bg-carbon border border-graphite">
                    <p className="text-gray-muted leading-relaxed">
                        Mayalok Ventures Private Limited (&quot;Mayalok Ventures,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and security of personal data entrusted to us by our portfolio companies, investors, partners, and website visitors. This Privacy Policy outlines our practices concerning the collection, use, storage, and protection of personal information in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (EU), and other relevant jurisdictional requirements.
                    </p>
                </div>

                {/* Accordion Sections */}
                <div className="space-y-2">
                    <AccordionItem
                        title="1. Data Sovereignty & Localization"
                        isOpen={openSection === 'sovereignty'}
                        onToggle={() => toggleSection('sovereignty')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                Mayalok Ventures maintains strict data sovereignty protocols to ensure compliance with local and international data protection regulations. All personal data collected from Indian residents is stored and processed within the territory of India, in accordance with the Digital Personal Data Protection Act, 2023.
                            </p>
                            <h4 className="text-platinum font-medium mt-4">1.1 Infrastructure & Storage</h4>
                            <p>
                                All data is stored on enterprise-grade servers hosted in AWS Mumbai Region (ap-south-1), ensuring low-latency access and compliance with Indian data localization requirements. Our infrastructure is ISO 27001 certified and undergoes regular third-party security audits.
                            </p>
                            <h4 className="text-platinum font-medium mt-4">1.2 Cross-Border Data Transfers</h4>
                            <p>
                                In the event that personal data must be transferred outside India for legitimate business purposes (such as international investor communications), such transfers are conducted in accordance with applicable data protection laws, including the execution of Standard Contractual Clauses (SCCs) and adequacy assessments as required under GDPR and DPDP Act, 2023.
                            </p>
                            <h4 className="text-platinum font-medium mt-4">1.3 Data Residency Guarantees</h4>
                            <p>
                                Sensitive personal data, including financial information, identification documents, and proprietary business intelligence, shall not be transferred outside India without explicit consent from the data principal, except where required by law or regulatory mandate.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="2. Regulatory Compliance Framework"
                        isOpen={openSection === 'compliance'}
                        onToggle={() => toggleSection('compliance')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <h4 className="text-platinum font-medium">2.1 Digital Personal Data Protection Act, 2023 (India)</h4>
                            <p>
                                Mayalok Ventures operates in full compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act), which governs the processing of digital personal data in India. We act as a &quot;Data Fiduciary&quot; as defined under the DPDP Act and fulfill all obligations including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Obtaining valid consent before processing personal data</li>
                                <li>Providing clear notice about data processing purposes</li>
                                <li>Implementing reasonable security safeguards</li>
                                <li>Honoring data principal rights including access, correction, and erasure</li>
                                <li>Appointing a Data Protection Officer for grievance redressal</li>
                                <li>Reporting data breaches to the Data Protection Board of India within prescribed timelines</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-6">2.2 General Data Protection Regulation (GDPR)</h4>
                            <p>
                                For data subjects located within the European Economic Area (EEA), United Kingdom, or Switzerland, we comply with the General Data Protection Regulation (EU) 2016/679. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Lawful basis for processing (consent, legitimate interest, contractual necessity)</li>
                                <li>Data minimization and purpose limitation principles</li>
                                <li>Right to access, rectification, erasure, and data portability</li>
                                <li>Right to object to processing and automated decision-making</li>
                                <li>72-hour breach notification to supervisory authorities</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-6">2.3 Additional Jurisdictional Compliance</h4>
                            <p>
                                We maintain compliance with applicable data protection laws in all jurisdictions where we operate, including but not limited to the California Consumer Privacy Act (CCPA), Singapore Personal Data Protection Act (PDPA), and UAE Data Protection Law.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="3. Encryption & Technical Security Standards"
                        isOpen={openSection === 'encryption'}
                        onToggle={() => toggleSection('encryption')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                Mayalok Ventures employs industry-leading encryption and security protocols to protect all personal and business data from unauthorized access, disclosure, alteration, or destruction.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">3.1 Data in Transit</h4>
                            <p>
                                All data transmitted between users and our systems is encrypted using Transport Layer Security (TLS) 1.3 protocol. This ensures that all communications, including form submissions, API calls, and document transfers, are protected against interception and man-in-the-middle attacks.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">3.2 Data at Rest</h4>
                            <p>
                                All data stored on our servers is encrypted using Advanced Encryption Standard (AES) 256-bit encryption. Database encryption is implemented at the storage layer, ensuring that even in the unlikely event of physical media compromise, data remains unreadable without proper decryption keys.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">3.3 Key Management</h4>
                            <p>
                                Encryption keys are managed using AWS Key Management Service (KMS) with automatic key rotation policies. Access to encryption keys is restricted to authorized personnel on a need-to-know basis and is subject to multi-factor authentication.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">3.4 Infrastructure Security</h4>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Web Application Firewall (WAF) protection against common attack vectors</li>
                                <li>DDoS mitigation through enterprise-grade cloud infrastructure</li>
                                <li>Regular vulnerability assessments and penetration testing</li>
                                <li>Intrusion detection and prevention systems (IDS/IPS)</li>
                                <li>Security Information and Event Management (SIEM) monitoring</li>
                                <li>24/7 security operations center monitoring</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-4">3.5 Access Controls</h4>
                            <p>
                                We implement role-based access control (RBAC) ensuring that personnel can only access data necessary for their specific job functions. All access is logged and auditable. Administrative access requires multi-factor authentication and is subject to regular access reviews.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="4. Proprietary Methodologies & Confidential Information"
                        isOpen={openSection === 'proprietary'}
                        onToggle={() => toggleSection('proprietary')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                Mayalok Ventures and its portfolio companies develop and maintain proprietary methodologies, frameworks, and business intelligence that constitute valuable trade secrets and confidential information.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">4.1 Classification of Confidential Information</h4>
                            <p>
                                All client strategies, investment theses, due diligence reports, operational audits, risk assessments, and proprietary algorithms are classified as <span className="text-gold-accent font-medium">Highly Confidential</span> and are subject to the highest level of protection under our information security policies.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">4.2 Non-Disclosure Agreements</h4>
                            <p>
                                All employees, contractors, advisors, and third-party service providers with access to confidential information are required to execute comprehensive Non-Disclosure Agreements (NDAs) prior to engagement. These NDAs include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Perpetual confidentiality obligations for trade secrets</li>
                                <li>Minimum 5-year confidentiality period for general business information</li>
                                <li>Non-compete and non-solicitation provisions where legally enforceable</li>
                                <li>Specific remedies including injunctive relief and liquidated damages</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-4">4.3 Portfolio Company Data Segregation</h4>
                            <p>
                                Data and intellectual property belonging to individual portfolio companies is strictly segregated using logical and physical isolation measures. Cross-portfolio data sharing occurs only with explicit consent and for legitimate operational synergies.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">4.4 Audit Reports & Risk Assessments</h4>
                            <p>
                                Risk assessments, security audits, and operational reviews conducted by Risk Fortress or any Mayalok Ventures entity are treated as privileged documents. Distribution is limited to authorized stakeholders, and all copies are tracked and controlled.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="5. Data Collection & Processing"
                        isOpen={openSection === 'collection'}
                        onToggle={() => toggleSection('collection')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <h4 className="text-platinum font-medium">5.1 Categories of Data Collected</h4>
                            <p>We may collect and process the following categories of personal data:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><span className="text-platinum">Identity Data:</span> Full name, title, company affiliation, professional credentials</li>
                                <li><span className="text-platinum">Contact Data:</span> Email address, telephone number, business address</li>
                                <li><span className="text-platinum">Professional Data:</span> LinkedIn profile, resume, work history, skills</li>
                                <li><span className="text-platinum">Financial Data:</span> Investment preferences, accreditation status (for investors)</li>
                                <li><span className="text-platinum">Technical Data:</span> IP address, browser type, device information, cookies</li>
                                <li><span className="text-platinum">Communication Data:</span> Correspondence, meeting notes, pitch materials</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-6">5.2 Purposes of Processing</h4>
                            <p>Personal data is processed for the following legitimate purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Evaluating investment opportunities and venture pitches</li>
                                <li>Managing investor relations and communications</li>
                                <li>Providing portfolio company support services</li>
                                <li>Talent acquisition and network development</li>
                                <li>Compliance with legal and regulatory obligations</li>
                                <li>Website analytics and service improvement</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-6">5.3 Retention Periods</h4>
                            <p>
                                Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Investment-related records are retained for a minimum of 8 years. Marketing consent records are retained for 3 years from last interaction.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="6. Data Principal Rights"
                        isOpen={openSection === 'rights'}
                        onToggle={() => toggleSection('rights')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                Under applicable data protection laws, you have the following rights with respect to your personal data:
                            </p>

                            <ul className="space-y-4 mt-4">
                                <li>
                                    <span className="text-platinum font-medium">Right to Access:</span> You may request confirmation of whether we process your personal data and obtain a copy of such data.
                                </li>
                                <li>
                                    <span className="text-platinum font-medium">Right to Correction:</span> You may request correction of inaccurate or incomplete personal data.
                                </li>
                                <li>
                                    <span className="text-platinum font-medium">Right to Erasure:</span> You may request deletion of your personal data, subject to legal retention requirements.
                                </li>
                                <li>
                                    <span className="text-platinum font-medium">Right to Withdraw Consent:</span> Where processing is based on consent, you may withdraw consent at any time.
                                </li>
                                <li>
                                    <span className="text-platinum font-medium">Right to Grievance Redressal:</span> You may lodge complaints with our Data Protection Officer or the relevant supervisory authority.
                                </li>
                                <li>
                                    <span className="text-platinum font-medium">Right to Nominate:</span> Under DPDP Act, you may nominate another individual to exercise your rights in the event of your death or incapacity.
                                </li>
                            </ul>

                            <p className="mt-6">
                                To exercise any of these rights, please contact our Data Protection Officer at <span className="text-gold-accent">privacy@mayalok.ventures</span>. We will respond to all legitimate requests within 30 days.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="7. Cookies & Tracking Technologies"
                        isOpen={openSection === 'cookies'}
                        onToggle={() => toggleSection('cookies')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">7.1 Types of Cookies Used</h4>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><span className="text-platinum">Essential Cookies:</span> Required for website functionality</li>
                                <li><span className="text-platinum">Analytics Cookies:</span> Help us understand how visitors interact with our website</li>
                                <li><span className="text-platinum">Preference Cookies:</span> Remember your settings and preferences</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-4">7.2 Cookie Management</h4>
                            <p>
                                You may control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="8. Third-Party Service Providers"
                        isOpen={openSection === 'thirdparty'}
                        onToggle={() => toggleSection('thirdparty')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                We engage carefully vetted third-party service providers to support our operations. All third parties are bound by data processing agreements that ensure equivalent levels of data protection.
                            </p>

                            <h4 className="text-platinum font-medium mt-4">8.1 Categories of Service Providers</h4>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Cloud infrastructure providers (AWS)</li>
                                <li>Form processing services (Formspree)</li>
                                <li>Analytics providers</li>
                                <li>Legal and compliance advisors</li>
                                <li>Audit and accounting firms</li>
                            </ul>

                            <h4 className="text-platinum font-medium mt-4">8.2 Sub-Processor Due Diligence</h4>
                            <p>
                                All third-party processors undergo security assessments prior to engagement. We maintain a register of sub-processors available upon request.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="9. Data Breach Response"
                        isOpen={openSection === 'breach'}
                        onToggle={() => toggleSection('breach')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>
                                In the event of a personal data breach, Mayalok Ventures maintains a comprehensive incident response plan:
                            </p>

                            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                                <li>Immediate containment and assessment of the breach</li>
                                <li>Notification to the Data Protection Board of India within 72 hours (as required under DPDP Act)</li>
                                <li>Notification to affected data principals without undue delay</li>
                                <li>Coordination with law enforcement where applicable</li>
                                <li>Post-incident review and remediation measures</li>
                                <li>Documentation and reporting to relevant stakeholders</li>
                            </ul>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="10. Contact Information"
                        isOpen={openSection === 'contact'}
                        onToggle={() => toggleSection('contact')}
                    >
                        <div className="space-y-4 text-gray-muted leading-relaxed">
                            <p>For any privacy-related inquiries, requests, or complaints:</p>

                            <div className="mt-4 p-4 bg-graphite/30 border border-graphite">
                                <p className="text-platinum font-medium">Data Protection Officer</p>
                                <p className="mt-2">Mayalok Ventures Private Limited</p>
                                <p>Email: <span className="text-gold-accent">privacy@mayalok.ventures</span></p>
                            </div>

                            <p className="mt-4">
                                If you are not satisfied with our response, you have the right to lodge a complaint with the Data Protection Board of India or relevant supervisory authority in your jurisdiction.
                            </p>
                        </div>
                    </AccordionItem>
                </div>

                {/* Compliance Footer */}
                <div className="mt-12 pt-8 border-t border-graphite">
                    <p className="text-xs text-gray-muted text-center leading-relaxed">
                        This Privacy Policy is governed by the laws of India. By using our services, you acknowledge that you have read and understood this policy. 
                        Mayalok Ventures reserves the right to update this policy at any time. Material changes will be communicated through our website.
                    </p>
                    <p className="text-xs text-gray-muted text-center mt-4">
                        © {new Date().getFullYear()} {SITE_METADATA.title} Private Limited. All rights reserved. | CIN: [To be updated upon incorporation]
                    </p>
                </div>
            </div>
        </div>
    )
}

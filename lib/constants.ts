/**
 * Application constants and configuration
 * Centralized for single source of truth
 */

export const SITE_METADATA = {
    title: 'Mayalok Ventures',
    description: 'Architecting the Future of Reality',
    url: 'https://mayalok.ventures',
    ogImage: '/og-image.jpg',
}

export const NAVIGATION = [
    { name: 'Home', href: '/' },
    { name: 'Ecosystem', href: '/ventures/' },
    { name: 'Strategy', href: '/about/' },
    { name: 'Join', href: '/join/' },
    { name: 'Contact', href: '/contact/' },
] as const

export const VENTURES = [
    {
        id: 'pramaan',
        name: 'Pramaan',
        tagline: 'Next-Gen Talent Acquisition',
        description: "We don't just find talent; we certify execution capability. Pramaan utilizes a proprietary 3-stage vetting architecture—combining psychometric profiling, algorithmic skill verification, and real-world simulation—to eliminate hiring friction. We provide high-growth startups with 'Deployment-Ready' human capital, reducing time-to-productivity by 40%.",
        color: 'blue',
        url: 'https://pramaanx.com',
    },
    {
        id: 'riskfortress',
        name: 'RiskFortress',
        tagline: 'Elite Risk Management & Security',
        description: "Moving beyond reactive security, Risk Fortress engineers 'Antifragility' for modern enterprises. We specialize in identifying systemic vulnerabilities in operations, legal compliance, and digital infrastructure before they manifest. Our focus is on limiting downside exposure while preserving the agility required for rapid scaling.",
        color: 'red',
        url: 'https://riskfortress.com',
    },
    {
        id: 'mayavi',
        name: 'Mayavi Studio',
        tagline: 'Visuals Beyond Imagination',
        description: "isuals are commodities; narratives are assets. Mayavi Studio operates at the intersection of design psychology and corporate strategy. We architect high-fidelity digital identities that do not just capture attention but engineer trust. From immersive digital experiences to institutional-grade branding, we build the visual language of authority.",
        color: 'purple',
        url: 'https://mayavistudio.in',
    },
    {
        id: 'deeplink',
        name: 'Deeplink Creators',
        tagline: 'Monetizing Influence',
        description: 'Transforming creators into scalable, revenue-driven digital assets.',
        color: 'green',
        url: 'https://deeplinkcreators.com',
    },
    {
        id: 'gurumaya',
        name: 'GuruMaya',
        tagline: 'Wisdom for the Modern Era',
        description: 'A digital knowledge ecosystem blending ancient insight with modern execution.',
        color: 'amber',
        url: 'https://gurumaya.in',
    },
] as const

export const ANIMATION_DELAYS = {
    stagger: 0.1,
    pageTransition: 0.3,
    hover: 0.15,
} as const

export const FORMPREE_CONFIG = {
    contactFormId: process.env.NEXT_PUBLIC_FORMPREE_CONTACT_ID || 'mqezeowr',
    pitchFormId: process.env.NEXT_PUBLIC_FORMPREE_PITCH_ID || 'mqezeowr',
} as const
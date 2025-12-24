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
    { name: 'Contact', href: '/contact/' },
] as const

export const VENTURES = [
    {
        id: 'pramaan',
        name: 'Pramaan',
        tagline: 'Next-Gen Talent Acquisition',
        description: 'Re-engineering how elite talent is identified, verified, and deployed at scale.',
        color: 'blue',
        url: 'https://pramaan.io',
    },
    {
        id: 'riskfortress',
        name: 'RiskFortress',
        tagline: 'Elite Risk Management & Security',
        description: 'Protecting high-value assets, intelligence, and enterprises from modern threats.',
        color: 'red',
        url: 'https://riskfortress.io',
    },
    {
        id: 'mayavi',
        name: 'Mayavi Studio',
        tagline: 'Visuals Beyond Imagination',
        description: 'Cinematic branding, identity systems, and digital storytelling for premium brands.',
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
    contactFormId: process.env.NEXT_PUBLIC_FORMPREE_CONTACT_ID || 'YOUR_FORMSPREE_ID',
    pitchFormId: process.env.NEXT_PUBLIC_FORMPREE_PITCH_ID || 'YOUR_FORMSPREE_PITCH_ID',
} as const
/**
 * Framer Motion animation variants
 * Centralized for consistency and reusability
 */

import { Variants } from 'framer-motion'

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
}

export const scaleInVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export const slideInVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export const staggerContainerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export const cardHoverVariant: Variants = {
    initial: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
        scale: 1.05,
        rotateX: 1,
        rotateY: 1,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export const pageTransitionVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    },
}
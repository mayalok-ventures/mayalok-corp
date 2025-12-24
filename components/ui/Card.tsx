import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'

type CardVariant = 'default' | 'elevated' | 'bordered' | 'gradient'
type CardPadding = 'none' | 'sm' | 'default' | 'lg' | 'xl'
type CardHover = 'none' | 'scale' | 'glow' | 'lift'

const variantStyles: Record<CardVariant, string> = {
    default: 'glass-dark',
    elevated: 'glass-dark shadow-2xl',
    bordered: 'border border-graphite bg-carbon',
    gradient: 'bg-gradient-to-br from-carbon to-graphite border border-graphite',
}

const paddingStyles: Record<CardPadding, string> = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
}

const hoverStyles: Record<CardHover, string> = {
    none: '',
    scale: 'hover:scale-[1.02]',
    glow: 'hover:gold-glow',
    lift: 'hover:-translate-y-1 hover:shadow-xl',
}

function cardVariants(options?: {
    variant?: CardVariant
    padding?: CardPadding
    hover?: CardHover
}): string {
    const { variant = 'default', padding = 'default', hover = 'glow' } = options || {}
    return cn(
        'transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles[hover]
    )
}

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
    variant?: CardVariant
    padding?: CardPadding
    hover?: CardHover
    hoverEffect?: boolean
    cornerAccents?: boolean
    borderGlow?: boolean
    children?: ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            className,
            variant = 'default',
            padding = 'default',
            hover = 'glow',
            hoverEffect = true,
            cornerAccents = false,
            borderGlow = false,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    cardVariants({ variant, padding, hover: hoverEffect ? hover : 'none' }),
                    borderGlow && 'gold-glow',
                    'relative',
                    className
                )}
                whileHover={hoverEffect ? { scale: 1.02 } : undefined}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                {...props}
            >
                {cornerAccents && (
                    <>
                        <div className="absolute top-0 left-0 w-4 h-px bg-gold-accent" />
                        <div className="absolute top-0 left-0 h-4 w-px bg-gold-accent" />
                        <div className="absolute top-0 right-0 w-4 h-px bg-gold-accent" />
                        <div className="absolute top-0 right-0 h-4 w-px bg-gold-accent" />
                        <div className="absolute bottom-0 left-0 w-4 h-px bg-gold-accent" />
                        <div className="absolute bottom-0 left-0 h-4 w-px bg-gold-accent" />
                        <div className="absolute bottom-0 right-0 w-4 h-px bg-gold-accent" />
                        <div className="absolute bottom-0 right-0 h-4 w-px bg-gold-accent" />
                    </>
                )}
                {children}
            </motion.div>
        )
    }
)

Card.displayName = 'Card'

export { Card, cardVariants }

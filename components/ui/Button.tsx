import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'default' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'xl'
type ButtonRounded = 'default' | 'sm' | 'full'

const variantStyles: Record<ButtonVariant, string> = {
    default: 'bg-gold-accent text-carbon hover:bg-gold-accent/90',
    secondary: 'glass-dark text-platinum hover:gold-glow',
    ghost: 'border border-graphite text-platinum hover:border-gold-accent hover:text-gold-accent',
    link: 'text-gold-accent underline-offset-4 hover:underline',
}

const sizeStyles: Record<ButtonSize, string> = {
    default: 'px-6 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
}

const roundedStyles: Record<ButtonRounded, string> = {
    default: 'rounded-none',
    sm: 'rounded-sm',
    full: 'rounded-full',
}

function buttonVariants(options?: {
    variant?: ButtonVariant
    size?: ButtonSize
    rounded?: ButtonRounded
    className?: string
}): string {
    const { variant = 'default', size = 'default', rounded = 'default', className } = options || {}
    return cn(
        'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-accent/50 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        roundedStyles[rounded],
        className
    )
}

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
    variant?: ButtonVariant
    size?: ButtonSize
    rounded?: ButtonRounded
    loading?: boolean
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'default',
            rounded = 'default',
            loading = false,
            icon,
            iconPosition = 'left',
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <motion.button
                ref={ref}
                className={buttonVariants({ variant, size, rounded, className })}
                disabled={disabled || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {loading && (
                    <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                )}

                {!loading && icon && iconPosition === 'left' && (
                    <span className="mr-2">{icon}</span>
                )}

                {children}

                {!loading && icon && iconPosition === 'right' && (
                    <span className="ml-2">{icon}</span>
                )}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }

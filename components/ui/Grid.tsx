import React, { forwardRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUpVariant } from '@/lib/animations'

type GridColumns = 1 | 2 | 3 | 4 | 5
type GridGap = 'none' | 'sm' | 'default' | 'lg' | 'xl'
type GridLayout = 'default' | 'bento' | 'masonry'

const columnStyles: Record<GridColumns, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
}

const gapStyles: Record<GridGap, string> = {
    none: 'gap-0',
    sm: 'gap-4',
    default: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
}

const layoutStyles: Record<GridLayout, string> = {
    default: '',
    bento: 'auto-rows-[200px] grid-cols-1 md:grid-cols-4 lg:grid-cols-6',
    masonry: 'grid-flow-dense',
}

function gridVariants(options?: {
    columns?: GridColumns
    gap?: GridGap
    layout?: GridLayout
}): string {
    const { columns = 3, gap = 'default', layout = 'default' } = options || {}
    return cn('grid', columnStyles[columns], gapStyles[gap], layoutStyles[layout])
}

export interface GridProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children' | 'layout'> {
    columns?: GridColumns
    gap?: GridGap
    gridLayout?: GridLayout
    staggerChildren?: boolean
    staggerDelay?: number
    animateOnView?: boolean
    children?: ReactNode
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
    (
        {
            className,
            columns = 3,
            gap = 'default',
            gridLayout = 'default',
            staggerChildren = false,
            staggerDelay = 0.1,
            animateOnView = true,
            children,
            ...props
        },
        ref
    ) => {
        const containerVariants = staggerChildren
            ? {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.2,
                    },
                },
            }
            : undefined

        return (
            <motion.div
                ref={ref}
                className={cn(gridVariants({ columns, gap, layout: gridLayout }), className)}
                variants={containerVariants}
                initial={animateOnView ? "hidden" : undefined}
                whileInView={animateOnView ? "visible" : undefined}
                viewport={{ once: true, amount: 0.1 }}
                {...props}
            >
                {staggerChildren && React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUpVariant}
                        custom={index}
                    >
                        {child}
                    </motion.div>
                ))}

                {!staggerChildren && children}
            </motion.div>
        )
    }
)

Grid.displayName = 'Grid'

export { Grid, gridVariants }

interface GridItemProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
    span?: number | { sm?: number; md?: number; lg?: number; xl?: number }
    rowSpan?: number | { sm?: number; md?: number; lg?: number; xl?: number }
    animate?: boolean
    children?: ReactNode
}

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
    ({ className, span, rowSpan, animate = true, children, ...props }, ref) => {
        const getSpanClasses = () => {
            if (!span) return ''

            if (typeof span === 'number') {
                return `col-span-${span}`
            }

            return Object.entries(span)
                .map(([breakpoint, value]) => `${breakpoint}:col-span-${value}`)
                .join(' ')
        }

        const getRowSpanClasses = () => {
            if (!rowSpan) return ''

            if (typeof rowSpan === 'number') {
                return `row-span-${rowSpan}`
            }

            return Object.entries(rowSpan)
                .map(([breakpoint, value]) => `${breakpoint}:row-span-${value}`)
                .join(' ')
        }

        if (!animate) {
            return (
                <div
                    ref={ref}
                    className={cn(getSpanClasses(), getRowSpanClasses(), className)}
                >
                    {children}
                </div>
            )
        }

        return (
            <motion.div
                ref={ref}
                className={cn(getSpanClasses(), getRowSpanClasses(), className)}
                variants={fadeUpVariant}
                {...props}
            >
                {children}
            </motion.div>
        )
    }
)

GridItem.displayName = 'GridItem'

export { GridItem }

'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: string
}

/**
 * Particle network animation for hero background
 * Canvas-based for optimal performance
 */
export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas dimensions
        const resize = () => {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Particle system
        const particles: Particle[] = []
        const particleCount = 80
        const connectionDistance = 150

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                color: i % 3 === 0 ? '#C7A14A' : i % 3 === 1 ? '#9CA3AF' : '#1C1F26',
            })
        }

        // Animation loop
        let animationId: number
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                // Boundary check
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.fill()

                // Draw connections
                particles.forEach((p2) => {
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = p.color === '#C7A14A'
                            ? 'rgba(199, 161, 74, 0.1)'
                            : 'rgba(156, 163, 175, 0.05)'
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                })
            })

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    )
}
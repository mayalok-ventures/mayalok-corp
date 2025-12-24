import Hero from '@/components/sections/Hero'
import VenturesGrid from '@/components/sections/VenturesGrid'
import Manifesto from '@/components/sections/Manifesto'

/**
 * Home page component
 * Orchestrates all hero and showcase sections
 */
export default function HomePage() {
    return (
        <>
            <Hero />
            <VenturesGrid />
            <Manifesto />
        </>
    )
}
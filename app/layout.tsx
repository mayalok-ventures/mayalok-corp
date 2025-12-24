import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import { SITE_METADATA } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    metadataBase: new URL(SITE_METADATA.url),
    openGraph: {
        title: SITE_METADATA.title,
        description: SITE_METADATA.description,
        images: [SITE_METADATA.ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
}

/**
 * Root layout component
 * Applies global styles and structure
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="min-h-screen flex flex-col">
                <SmoothScroll />
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
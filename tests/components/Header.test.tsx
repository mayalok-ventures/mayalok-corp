import { render, screen } from '@testing-library/react'
import Header from '@/components/layout/Header'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(() => '/'),
}))

describe('Header Component', () => {
    beforeEach(() => {
        render(<Header />)
    })

    test('renders logo with correct text', () => {
        const logo = screen.getByText(/Mayalok/i)
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveTextContent('MayalokVentures')
    })

    test('renders navigation links', () => {
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Ecosystem')).toBeInTheDocument()
        expect(screen.getByText('Strategy')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    test('applies glassmorphism classes', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toHaveClass('glass-dark')
    })
})
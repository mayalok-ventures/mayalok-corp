// Import Jest DOM extensions
import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
    }),
    usePathname: jest.fn(() => '/'),
    useSearchParams: jest.fn(() => new URLSearchParams()),
}))

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
        return <img {...props} />
    },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
        header: ({ children, ...props }) => <header {...props}>{children}</header>,
        section: ({ children, ...props }) => <section {...props}>{children}</section>,
        h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
        ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
        li: ({ children, ...props }) => <li {...props}>{children}</li>,
        article: ({ children, ...props }) => <article {...props}>{children}</article>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
    useAnimation: () => ({
        start: jest.fn(),
        stop: jest.fn(),
    }),
    useInView: () => [null, false],
    useScroll: () => ({
        scrollY: { current: 0 },
        scrollYProgress: { current: 0 },
    }),
}))

// Mock Formspree
jest.mock('@formspree/react', () => ({
    useForm: () => [
        { submitting: false, succeeded: false, errors: [] },
        jest.fn(),
    ],
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))
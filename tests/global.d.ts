/// <reference types="@testing-library/jest-dom" />
/// <reference types="jest" />

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R
            toHaveClass(...classNames: string[]): R
            toHaveAttribute(attr: string, value?: string): R
            toHaveTextContent(text: string | RegExp): R
            toBeVisible(): R
            toBeDisabled(): R
            toBeEnabled(): R
            toBeChecked(): R
            toBeEmptyDOMElement(): R
            toHaveStyle(css: string | Record<string, unknown>): R
        }
    }
}

export { }
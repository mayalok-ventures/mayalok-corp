import { validateEmail, validateForm, type FormSubmission } from '@/lib/formspree-adapter'

describe('Formspree Adapter', () => {
    describe('validateEmail', () => {
        it('validates correct email formats', () => {
            expect(validateEmail('test@example.com')).toBe(true)
            expect(validateEmail('user.name@domain.co')).toBe(true)
            expect(validateEmail('user+tag@domain.org')).toBe(true)
        })

        it('rejects invalid email formats', () => {
            expect(validateEmail('invalid-email')).toBe(false)
            expect(validateEmail('@domain.com')).toBe(false)
            expect(validateEmail('user@')).toBe(false)
            expect(validateEmail('')).toBe(false)
        })
    })

    describe('validateForm', () => {
        const validForm: FormSubmission = {
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Test message',
        }

        it('accepts valid form data', () => {
            const result = validateForm(validForm)
            expect(result.isValid).toBe(true)
            expect(Object.keys(result.errors)).toHaveLength(0)
        })

        it('rejects empty name', () => {
            const result = validateForm({ ...validForm, name: '' })
            expect(result.isValid).toBe(false)
            expect(result.errors.name).toBeDefined()
        })

        it('rejects name exceeding length limit', () => {
            const longName = 'a'.repeat(101)
            const result = validateForm({ ...validForm, name: longName })
            expect(result.isValid).toBe(false)
            expect(result.errors.name).toBeDefined()
        })

        it('rejects invalid email', () => {
            const result = validateForm({ ...validForm, email: 'invalid' })
            expect(result.isValid).toBe(false)
            expect(result.errors.email).toBeDefined()
        })

        it('rejects empty message', () => {
            const result = validateForm({ ...validForm, message: '' })
            expect(result.isValid).toBe(false)
            expect(result.errors.message).toBeDefined()
        })

        it('rejects message exceeding length limit', () => {
            const longMessage = 'a'.repeat(5001)
            const result = validateForm({ ...validForm, message: longMessage })
            expect(result.isValid).toBe(false)
            expect(result.errors.message).toBeDefined()
        })
    })
})
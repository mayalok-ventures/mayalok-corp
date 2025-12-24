/**
 * Formspree service adapter
 * Implements Hexagonal Architecture port for form submissions
 */

export interface FormSubmission {
    name: string
    email: string
    message: string
    type?: 'contact' | 'pitch'
}

export interface FormResponse {
    success: boolean
    message: string
    errors?: Record<string, string[]>
}

/**
 * Formspree service implementation
 * @param formId - Formspree form ID
 * @param data - Form submission data
 * @returns Promise with form response
 */
export async function submitToFormspree(
    formId: string,
    data: FormSubmission
): Promise<FormResponse> {
    // Input sanitization
    const sanitizedData = {
        name: data.name.trim().substring(0, 100),
        email: data.email.trim().substring(0, 100),
        message: data.message.trim().substring(0, 5000),
        _subject: data.type === 'pitch' ? 'New Venture Pitch' : 'Contact Form Submission',
    }

    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(sanitizedData),
        })

        const result = await response.json()

        if (response.ok) {
            return {
                success: true,
                message: 'Thank you for your submission. We will respond promptly.',
            }
        } else {
            return {
                success: false,
                message: 'Submission failed. Please try again.',
                errors: result.errors,
            }
        }
    } catch (error) {
        console.error('Form submission error:', error)
        return {
            success: false,
            message: 'Network error. Please check your connection.',
        }
    }
}

/**
 * Email validation utility
 * @param email - Email address to validate
 * @returns Boolean indicating validity
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
}

/**
 * Form validation service
 * @param data - Form data to validate
 * @returns Object with validation results
 */
export function validateForm(data: FormSubmission): {
    isValid: boolean
    errors: Record<string, string>
} {
    const errors: Record<string, string> = {}

    if (!data.name.trim()) {
        errors.name = 'Name is required'
    } else if (data.name.trim().length > 100) {
        errors.name = 'Name must be less than 100 characters'
    }

    if (!data.email.trim()) {
        errors.email = 'Email is required'
    } else if (!validateEmail(data.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (!data.message.trim()) {
        errors.message = 'Message is required'
    } else if (data.message.trim().length > 5000) {
        errors.message = 'Message must be less than 5000 characters'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    }
}
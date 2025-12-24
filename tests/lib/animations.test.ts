import { fadeUpVariant, cardHoverVariant } from '@/lib/animations'

describe('Animation Variants', () => {
    describe('fadeUpVariant', () => {
        it('has correct initial state', () => {
            expect(fadeUpVariant.hidden).toEqual({
                opacity: 0,
                y: 20,
            })
        })

        it('has correct visible state with custom delay', () => {
            const customDelay = 2
            const visible = fadeUpVariant.visible as (custom: number) => unknown
            const visibleState = visible(customDelay)
            expect(visibleState).toEqual({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: customDelay * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                },
            })
        })
    })

    describe('cardHoverVariant', () => {
        it('has correct initial state', () => {
            expect(cardHoverVariant.initial).toEqual({
                scale: 1,
                rotateX: 0,
                rotateY: 0,
            })
        })

        it('has correct hover state', () => {
            expect(cardHoverVariant.hover).toEqual({
                scale: 1.05,
                rotateX: 1,
                rotateY: 1,
                transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                },
            })
        })
    })
})

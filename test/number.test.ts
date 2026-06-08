import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('test sum', () => {
    it('should return the sum of an array of numbers', () => {
        expect(sum([0, 1, 2, 3, 4, 45])).toBe(55)
    })

    it('should return 0 for an empty array', () => {
        expect(sum([])).toBe(0)
    })

    it('should return the element itself for a single-element array', () => {
        expect(sum([42])).toBe(42)
    })

    it('should handle negative numbers', () => {
        expect(sum([-1, -2, -3])).toBe(-6)
    })

    it('should handle mixed positive and negative numbers', () => {
        expect(sum([10, -5, 3, -2])).toBe(6)
    })

    it('should handle floating point numbers', () => {
        expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6)
    })
})

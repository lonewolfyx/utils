import { describe, expect, it } from 'vitest'
import { formatNumber } from '../src'

describe('test format', () => {
    it('test formatNumber', () => {
        expect(formatNumber(123456789)).toBe('123,456,789')
    })
})

import { describe, expect, it } from 'vitest'
import { capitalize, md5 } from '../src'

describe('should ', () => {
    it('string', () => {
        expect(capitalize('vitest')).toBe('Vitest')
    })

    it('md5', () => {
        expect(md5('123456')).toBe('e10adc3949ba59abbe56e057f20f883e')
    })
})

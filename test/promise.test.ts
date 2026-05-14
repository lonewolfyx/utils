import { describe, expect, it } from 'vitest'
import { importDefault } from '../src'

describe('test promise', () => {
    it('should return the default export via import()', async () => {
        const result = await importDefault(import('node:path'))
        expect(result).toBeDefined()
        expect(typeof result.resolve).toBe('function')
    })

    it('should return the default export via string', async () => {
        const result = await importDefault<typeof import('node:path')>('node:path')
        expect(result).toBeDefined()
        expect(typeof result.resolve).toBe('function')
    })

    it('should handle CJS modules without .default', async () => {
        const result = await importDefault(import('node:fs'))
        expect(result).toBeDefined()
        expect(typeof result.readFileSync).toBe('function')
    })

    it('should throw on non-existent module', async () => {
        await expect(importDefault('non-existent-module-12345')).rejects.toThrow()
    })
})

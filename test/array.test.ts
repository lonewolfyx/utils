import { mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { readJsonContent } from '../src'

const tmpDir = join(import.meta.dirname, '.tmp-test')
const tmpFile = join(tmpDir, 'test.json')

beforeEach(async () => {
    await mkdir(tmpDir, { recursive: true })
})

afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true })
})

describe('test readJsonContent', () => {
    it('should read and parse a valid JSON file', async () => {
        await writeFile(tmpFile, JSON.stringify({ name: 'test', value: 42 }))

        const result = await readJsonContent(tmpFile)
        expect(result).toEqual({ name: 'test', value: 42 })
    })

    it('should support generic type parameter', async () => {
        interface Config { name: string }
        await writeFile(tmpFile, JSON.stringify({ name: 'config' }))

        const result = await readJsonContent<Config>(tmpFile)
        expect(result.name).toBe('config')
    })

    it('should parse JSON array', async () => {
        await writeFile(tmpFile, JSON.stringify([1, 2, 3]))

        const result = await readJsonContent<number[]>(tmpFile)
        expect(result).toEqual([1, 2, 3])
    })

    it('should throw on non-existent file', async () => {
        await expect(readJsonContent(join(tmpDir, 'not-exist.json'))).rejects.toThrow()
    })

    it('should throw on invalid JSON', async () => {
        await writeFile(tmpFile, '{ invalid json }')

        await expect(readJsonContent(tmpFile)).rejects.toThrow()
    })
})

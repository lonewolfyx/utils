import { describe, expect, it } from 'vitest'
import { isUrl } from '../src'

describe('test validate', () => {
    const validUrls = [
        'https://www.example.com',
        'http://example.com',
        'https://example.com/path?query=1',
        'https://example.com/path#fragment',
        'https://sub.domain.co.uk',
        'https://user:pass@example.com',
        'https://xn--fsqu00a.xn--3pxh.com',
        'https://192.168.1.1',
        'https://[::1]',
    ]

    validUrls.forEach((url) => {
        it(`url all true - ${url}`, () => {
            expect(isUrl(url)).toBe(true)
        })
    })

    const invalidUrls = [
        'not a url',
        'example.com', // 缺少协议
        'http://', // 缺少域名
        'https://example', // 缺少顶级域名
        'https://example.com/path#', // # 单独出现
        'http://example.com/path?', // ? 单独出现
    ]

    invalidUrls.forEach((url) => {
        it(`url all false - ${url}`, () => {
            expect(isUrl(url)).toBe(false)
        })
    })
})

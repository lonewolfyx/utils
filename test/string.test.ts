import { expect, describe, test } from 'vitest'
import { capitalize, md5 } from '../src'

describe('should ', () => {
	test('string', () => {
		expect(capitalize('vitest')).toBe('Vitest')
	})

	test('md5', () => {
		expect(md5('123456')).toBe('e10adc3949ba59abbe56e057f20f883e')
	})
})
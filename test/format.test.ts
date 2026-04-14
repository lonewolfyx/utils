import { describe, expect, test } from 'vitest'
import { formatNumber } from '../src'

describe('test format', () => {
	test('test formatNumber', () => {
		expect(formatNumber(123456789)).toBe('123,456,789')
	})
})
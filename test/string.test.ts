import { expect, test } from 'vitest'
import { capitalize } from '../src'

test('string',()=>{
	expect(capitalize('vitest')).toBe('Vitest')
})
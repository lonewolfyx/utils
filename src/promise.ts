import type { Fn } from '@/types.ts'

/**
 * Promised `setTimeout`
 *
 * @category Promise
 */
export function sleep(ms: number, callback?: Fn<any>): Promise<void> {
    return new Promise<void>(resolve =>

        setTimeout(async () => {
            await callback?.()
            resolve()
        }, ms),
    )
}

/**
 * Import the default export of a module.
 *
 * ```ts
 * // Pass the import directly — types are fully inferred
 * const lodash = await importDefault(import('lodash'))
 *
 * // Pass a string — specify the module type manually
 * const lodash = await importDefault<typeof import('lodash')>('lodash')
 *
 * // Both are equivalent to
 * const lodash = (await import('lodash')).default
 * ```
 *
 * @category Promise
 */
export async function importDefault<T extends Promise<any>>(mod: T): Promise<T extends { default: infer U } ? U : Awaited<T>>
export async function importDefault<T>(name: string): Promise<T extends { default: infer U } ? U : T>
export async function importDefault<T extends Promise<any> | string>(input: T): Promise<any> {
    const mod = typeof input === 'string' ? await import(input) : await input
    return (mod as any).default ?? mod
}

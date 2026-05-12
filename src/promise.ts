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

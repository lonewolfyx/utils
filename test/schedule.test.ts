import { describe, expect, it, vi } from 'vitest'
import { createSchedule } from '../src'

describe('test schedule', () => {
    it('should execute tasks sequentially with function references', async () => {
        const order: number[] = []

        const results = await createSchedule()
            .todo(async () => {
                await new Promise(resolve => setTimeout(resolve, 30))
                order.push(1)
                return 'a'
            })
            .todo(async () => {
                await new Promise(resolve => setTimeout(resolve, 10))
                order.push(2)
                return 'b'
            })
            .todo(async () => {
                order.push(3)
                return 'c'
            })
            .done()

        expect(order).toEqual([1, 2, 3])
        expect(results).toEqual(['a', 'b', 'c'])
    })

    it('should support async function task via todo', async () => {
        const fn = vi.fn(async () => 'result')

        const results = await createSchedule()
            .todo(fn)
            .done()

        expect(fn).toHaveBeenCalledTimes(1)
        expect(results).toEqual(['result'])
    })

    it('should return empty array when no tasks are added', async () => {
        const results = await createSchedule().done()
        expect(results).toEqual([])
    })

    it('should chain todo calls correctly', () => {
        const schedule = createSchedule()
        const returned = schedule.todo(Promise.resolve(1))
        expect(returned).toBe(schedule)
    })

    it('should await promises passed to todo in order', async () => {
        const results = await createSchedule()
            .todo(Promise.resolve(10))
            .todo(Promise.resolve(20))
            .todo(Promise.resolve(30))
            .done()

        expect(results).toEqual([10, 20, 30])
    })

    it('should handle mixed promise and function tasks', async () => {
        const order: number[] = []

        const results = await createSchedule()
            .todo(async () => {
                order.push(1)
                return 10
            })
            .todo(
                new Promise<number>((resolve) => {
                    setTimeout(() => {
                        order.push(2)
                        resolve(20)
                    }, 10)
                }),
            )
            .todo(async () => {
                order.push(3)
                return 30
            })
            .done()

        expect(order).toEqual([1, 2, 3])
        expect(results).toEqual([10, 20, 30])
    })

    it('should stop execution and throw on task failure', async () => {
        const order: number[] = []

        const schedule = createSchedule()
            .todo(async () => {
                order.push(1)
                return 'ok'
            })
            .todo(async () => {
                throw new Error('task failed')
            })
            .todo(async () => {
                order.push(3)
                return 'should not reach'
            })

        await expect(schedule.done()).rejects.toThrow('task failed')
        expect(order).toEqual([1])
    })
})

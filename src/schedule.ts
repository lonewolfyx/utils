import type { Task } from '@/types.ts'

/**
 * Creates a sequential task scheduler with chainable API.
 * Tasks are executed in order when `.done()` is called.
 * @returns A schedule instance with `.todo()` and `.done()` methods
 * @example
 * const result = await createSchedule()
 *   .todo(fetchData())
 *   .todo(processData())
 *   .todo(saveData())
 *   .done()
 */
export function createSchedule() {
	const _tasks: Task[] = []

	const schedule = {
		todo(task: Task) {
			_tasks.push(task)
			return schedule
		},
		async done() {
			const results: unknown[] = []
			for (const task of _tasks) {
				const result = typeof task === 'function' ? await task() : await task
				results.push(result)
			}
			return results
		},
	}

	return schedule
}

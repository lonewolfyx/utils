# schedule

Sequential task scheduler with chainable API for orchestrating async tasks.

## createSchedule

Creates a task scheduler instance where tasks execute in the order they are added.

### Type

```ts
function createSchedule(): Schedule

interface Schedule {
    todo(task: Task): Schedule
    done(): Promise<unknown[]>
}

type Task = (() => Promise<unknown>) | Promise<unknown>
```

### Returns

Returns a scheduler object with the following methods:

| Method | Description |
| --- | --- |
| `.todo(task)` | Adds a task to the queue. Supports async functions or Promises. Returns the scheduler itself for chaining. |
| `.done()` | Executes all tasks sequentially. Returns `Promise<unknown[]>` with results from each task. |

### Behavior

- Tasks execute **sequentially** in the order they are added via `.todo()` (each task waits for the previous one to complete)
- If a task throws an error, subsequent tasks **will not execute**, and the Promise returned by `.done()` will be rejected
- Calling `.done()` on an empty scheduler returns an empty array `[]`

### Example

#### Basic Usage

```ts
import { createSchedule } from '@lonewolfyx/utils'

const results = await createSchedule()
    .todo(async () => {
        await sleep(100)
        return 'First task'
    })
    .todo(async () => {
        await sleep(100)
        return 'Second task'
    })
    .done()

console.log(results) // ['First task', 'Second task']
```

#### Mixed Functions and Promises

```ts
const results = await createSchedule()
    .todo(async () => {
        return 'Async function task'
    })
    .todo(Promise.resolve('Directly passed Promise'))
    .todo(async () => {
        return 'Another task'
    })
    .done()

console.log(results) // ['Async function task', 'Directly passed Promise', 'Another task']
```

#### Ensuring Execution Order

```ts
const order: number[] = []

await createSchedule()
    .todo(async () => {
        await sleep(200)
        order.push(1)
    })
    .todo(async () => {
        await sleep(100)
        order.push(2)
    })
    .todo(async () => {
        order.push(3)
    })
    .done()

console.log(order) // [1, 2, 3] — strictly executed in the order added
```

#### Error Handling

```ts
try {
    await createSchedule()
        .todo(async () => console.log('Task 1'))
        .todo(async () => {
            throw new Error('Task 2 error')
        })
        .todo(async () => console.log('Task 3 — will not execute'))
        .done()
} catch (e) {
    console.error(e) // Error: Task 2 error
}
```

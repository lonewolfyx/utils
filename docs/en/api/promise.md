# promise

Async utility functions.

## sleep

A Promise-based delay function, wrapping `setTimeout` into a Promise.

### Type

```ts
function sleep(ms: number, callback?: Fn<any>): Promise<void>
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ms | `number` | The number of milliseconds to wait |
| callback | `Fn<any>?` | Optional callback function to execute after the delay |

### Returns

`Promise<void>` — Resolves after the specified number of milliseconds.

### Example

```ts
import { sleep } from '@lonewolfyx/utils'

// Basic usage: wait 1 second
await sleep(1000)

// With callback function
await sleep(1000, () => {
    console.log('Executed after 1 second')
})

// Use in async flow
async function fetchData() {
    console.log('Requesting...')
    await sleep(2000)
    console.log('Continuing after 2 seconds')
}
```

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

---

## importDefault

Dynamically import a module and return its default export, equivalent to `(await import(name)).default`.

### Type

```ts
function importDefault<T extends Promise<any>>(mod: T): Promise<T extends { default: infer U } ? U : Awaited<T>>
function importDefault<T>(name: string): Promise<T extends { default: infer U } ? U : T>
```

Two calling conventions:

- **Pass `import()`**: Types are fully inferred, no generics needed.
- **Pass a string**: Requires manually specifying `typeof import('module-name')`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mod | `Promise<any>` | Module Promise returned by `import()` |
| name | `string` | Module name or path |

### Returns

The default export of the module; if the module has no `default`, returns the entire module.

### Example

```ts
import { importDefault } from '@lonewolfyx/utils'

// Recommended: pass import() directly, types are inferred
const lodash = await importDefault(import('lodash'))
lodash.merge({ a: 1 }, { b: 2 })

// Pass a string, requires manual type annotation
const lodash = await importDefault<typeof import('lodash')>('lodash')

// Import a Node.js built-in module (CJS compatible)
const fs = await importDefault(import('node:fs'))
fs.readFileSync('/path/to/file', 'utf-8')
```

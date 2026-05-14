# array

Utility functions for file reading and JSON parsing.

## readJsonContent

Read a JSON file and parse its contents, equivalent to `JSON.parse(await readFile(path, 'utf-8'))`.

### Type

```ts
function readJsonContent<T = unknown>(path: string): Promise<T>
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string` | The path to the JSON file |

### Returns

`Promise<T>` — The parsed JSON object, with the return type specifiable via generic parameter.

### Example

```ts
import { readJsonContent } from '@lonewolfyx/utils'

// Read a config file
const config = await readJsonContent('./config.json')

// Specify type with generics
interface PackageJson {
    name: string
    version: string
}

const pkg = await readJsonContent<PackageJson>('./package.json')
console.log(pkg.name, pkg.version)

// Read a JSON array
const list = await readJsonContent<string[]>('./list.json')
```

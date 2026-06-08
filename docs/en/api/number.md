# number

Number calculation utility functions.

## sum

Calculates the sum of all numbers in an array.

### Type

```ts
function sum(nums: number[]): number
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| nums | `number[]` | An array of numbers |

### Returns

`number` — The total sum of all elements in the array. Returns `0` for an empty array.

### Example

```ts
import { sum } from '@lonewolfyx/utils'

sum([0, 1, 2, 3, 4, 45]) // 55
sum([1, 2, 3]) // 6
sum([]) // 0
sum([-1, -2, -3]) // -6
```

# format

Number formatting utilities.

## formatNumber

Formats a number into a string with thousand separators.

### Type

```ts
function formatNumber(num: number): string
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| num | `number` | The number to format |

### Returns

`string` — The formatted string with thousand separators using `en-US` locale.

### Example

```ts
import { formatNumber } from '@lonewolfyx/utils'

formatNumber(1234567)    // '1,234,567'
formatNumber(1234567890) // '1,234,567,890'
formatNumber(100)        // '100'
formatNumber(0)          // '0'
```

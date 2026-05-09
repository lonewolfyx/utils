# format

数字格式化相关工具函数。

## formatNumber

将数字格式化为带千分位分隔符的字符串。

### 类型

```ts
function formatNumber(num: number): string
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| num | `number` | 需要格式化的数字 |

### 返回值

`string` — 格式化后的字符串，使用 `en-US` locale 的千分位逗号分隔。

### 示例

```ts
import { formatNumber } from '@lonewolfyx/utils'

formatNumber(1234567)    // '1,234,567'
formatNumber(1234567890) // '1,234,567,890'
formatNumber(100)        // '100'
formatNumber(0)          // '0'
```

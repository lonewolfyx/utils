# number

数字计算相关工具函数。

## sum

计算数组中所有数字的总和。

### 类型

```ts
function sum(nums: number[]): number
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| nums | `number[]` | 数字数组 |

### 返回值

`number` — 数组中所有元素的总和。空数组返回 `0`。

### 示例

```ts
import { sum } from '@lonewolfyx/utils'

sum([0, 1, 2, 3, 4, 45]) // 55
sum([1, 2, 3]) // 6
sum([]) // 0
sum([-1, -2, -3]) // -6
```

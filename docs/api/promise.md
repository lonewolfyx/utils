# promise

异步相关的工具函数。

## sleep

基于 Promise 的延时函数，是 `setTimeout` 的 Promise 封装。

### 类型

```ts
function sleep(ms: number, callback?: Fn<any>): Promise<void>
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ms | `number` | 等待的毫秒数 |
| callback | `Fn<any>?` | 可选的回调函数，在延时结束后执行 |

### 返回值

`Promise<void>` — 在指定毫秒数后 resolve。

### 示例

```ts
import { sleep } from '@lonewolfyx/utils'

// 基本用法：等待 1 秒
await sleep(1000)

// 带回调函数
await sleep(1000, () => {
    console.log('1 秒后执行')
})

// 在异步流程中使用
async function fetchData() {
    console.log('开始请求...')
    await sleep(2000)
    console.log('2 秒后继续')
}
```

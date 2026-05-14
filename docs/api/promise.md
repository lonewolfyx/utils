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

---

## importDefault

动态导入模块并返回其默认导出，等价于 `(await import(name)).default`。

### 类型

```ts
function importDefault<T extends Promise<any>>(mod: T): Promise<T extends { default: infer U } ? U : Awaited<T>>
function importDefault<T>(name: string): Promise<T extends { default: infer U } ? U : T>
```

支持两种调用方式：

- **传入 `import()`**：类型自动推导，无需手动指定泛型。
- **传入字符串**：需手动指定 `typeof import('module-name')`。

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mod | `Promise<any>` | `import()` 返回的模块 Promise |
| name | `string` | 模块名称或路径 |

### 返回值

模块的默认导出；若模块没有 `default`，则返回整个模块。

### 示例

```ts
import { importDefault } from '@lonewolfyx/utils'

// 推荐：直接传 import()，类型自动推导
const lodash = await importDefault(import('lodash'))
lodash.merge({ a: 1 }, { b: 2 })

// 传入字符串，需手动指定类型
const lodash = await importDefault<typeof import('lodash')>('lodash')

// 导入 Node.js 内置模块（CJS 兼容）
const fs = await importDefault(import('node:fs'))
fs.readFileSync('/path/to/file', 'utf-8')
```

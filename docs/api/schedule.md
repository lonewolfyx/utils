# schedule

顺序任务调度器，提供链式 API 编排异步任务。

## createSchedule

创建一个任务调度器实例，任务按添加顺序依次执行。

### 类型

```ts
function createSchedule(): Schedule

interface Schedule {
    todo: (task: Task) => Schedule
    done: () => Promise<unknown[]>
}

type Task = (() => Promise<unknown>) | Promise<unknown>
```

### 返回值

返回一个调度器对象，包含以下方法：

| 方法 | 说明 |
| --- | --- |
| `.todo(task)` | 添加一个任务到队列，支持传入异步函数或 Promise，返回调度器本身（支持链式调用） |
| `.done()` | 按顺序执行所有任务，返回 `Promise<unknown[]>`，结果数组包含每个任务的返回值 |

### 行为说明

- 任务按 `.todo()` 添加的顺序**依次执行**（前一个完成后再执行下一个）
- 如果某个任务抛出异常，后续任务将**不再执行**，`.done()` 返回的 Promise 会被 reject
- 空调度器调用 `.done()` 返回空数组 `[]`

### 示例

#### 基本用法

```ts
import { createSchedule } from '@lonewolfyx/utils'

const results = await createSchedule()
    .todo(async () => {
        await sleep(100)
        return '第一个任务'
    })
    .todo(async () => {
        await sleep(100)
        return '第二个任务'
    })
    .done()

console.log(results) // ['第一个任务', '第二个任务']
```

#### 混合使用函数和 Promise

```ts
const results = await createSchedule()
    .todo(async () => {
        return '异步函数任务'
    })
    .todo(Promise.resolve('直接传入的 Promise'))
    .todo(async () => {
        return '另一个任务'
    })
    .done()

console.log(results) // ['异步函数任务', '直接传入的 Promise', '另一个任务']
```

#### 保证执行顺序

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

console.log(order) // [1, 2, 3] — 严格按添加顺序执行
```

#### 错误处理

```ts
try {
    await createSchedule()
        .todo(async () => console.log('任务 1'))
        .todo(async () => {
            throw new Error('任务 2 出错')
        })
        .todo(async () => console.log('任务 3 — 不会执行'))
        .done()
}
catch (e) {
    console.error(e) // Error: 任务 2 出错
}
```

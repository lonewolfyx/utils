# 快速开始

## 安装

```bash
# npm
npm install @lonewolfyx/utils

# pnpm
pnpm add @lonewolfyx/utils

# yarn
yarn add @lonewolfyx/utils
```

## 使用

### 按需引入

推荐按需引入所需的工具函数：

```ts
import { formatNumber, capitalize, sleep } from '@lonewolfyx/utils'

// 数字千分位格式化
formatNumber(1234567) // '1,234,567'

// 首字母大写
capitalize('hello') // 'Hello'

// 异步等待
await sleep(1000) // 等待 1 秒
```

### 全量引入

```ts
import * as utils from '@lonewolfyx/utils'

utils.formatNumber(1234567)
utils.capitalize('hello')
utils.md5('123456')
```

## API 概览

| 模块 | 函数 | 说明 |
| --- | --- | --- |
| format | `formatNumber` | 数字千分位格式化 |
| promise | `sleep` | 基于 Promise 的延时函数 |
| schedule | `createSchedule` | 链式任务调度器 |
| string | `capitalize` | 首字母大写 |
| string | `randomStr` | 生成随机字符串 |
| string | `md5` | MD5 哈希计算 |

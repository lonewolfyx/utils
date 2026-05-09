# string

字符串相关的工具函数。

## capitalize

将字符串的首字母大写，其余字母小写。

### 类型

```ts
function capitalize(str: string): string
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| str | `string` | 输入字符串 |

### 返回值

`string` — 首字母大写的字符串。

### 示例

```ts
import { capitalize } from '@lonewolfyx/utils'

capitalize('hello')   // 'Hello'
capitalize('HELLO')   // 'Hello'
capitalize('hELLO')   // 'Hello'
capitalize('vitest')  // 'Vitest'
```

---

## randomStr

生成指定长度的随机字符串。

### 类型

```ts
function randomStr(size?: number, dict?: string): string
```

### 参数

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `number?` | `16` | 随机字符串的长度 |
| dict | `string?` | nanoid 默认字典 | 用于生成随机字符串的字符集 |

### 返回值

`string` — 生成的随机字符串。

### 示例

```ts
import { randomStr } from '@lonewolfyx/utils'

// 默认生成 16 位随机字符串
randomStr() // 'a1b2c3d4e5f6g7h8'

// 指定长度
randomStr(8)  // 'a1b2c3d4'
randomStr(32) // 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'

// 自定义字符集
randomStr(6, '0123456789') // '384917'
```

---

## md5

计算字符串的 MD5 哈希值。

### 类型

```ts
function md5(content: string): string
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| content | `string` | 需要计算哈希的字符串 |

### 返回值

`string` — 32 位小写十六进制 MD5 哈希值。

### 示例

```ts
import { md5 } from '@lonewolfyx/utils'

md5('hello') // '5d41402abc4b2a76b9719d911017c592'
md5('123456') // 'e10adc3949ba59abbe56e057f20f883e'
```

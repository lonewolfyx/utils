# array

文件读取与 JSON 解析相关工具函数。

## readJsonContent

读取 JSON 文件并解析其内容，等价于 `JSON.parse(await readFile(path, 'utf-8'))`。

### 类型

```ts
function readJsonContent<T = unknown>(path: string): Promise<T>
```

### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | JSON 文件的路径 |

### 返回值

`Promise<T>` — 解析后的 JSON 对象，可通过泛型参数指定返回类型。

### 示例

```ts
import { readJsonContent } from '@lonewolfyx/utils'

// 读取配置文件
const config = await readJsonContent('./config.json')

// 使用泛型指定类型
interface PackageJson {
    name: string
    version: string
}

const pkg = await readJsonContent<PackageJson>('./package.json')
console.log(pkg.name, pkg.version)

// 读取 JSON 数组
const list = await readJsonContent<string[]>('./list.json')
```

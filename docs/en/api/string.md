# string

String utility functions.

## capitalize

Capitalizes the first letter of a string and lowercases the rest.

### Type

```ts
function capitalize(str: string): string
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| str | `string` | The input string |

### Returns

`string` — The string with the first letter capitalized.

### Example

```ts
import { capitalize } from '@lonewolfyx/utils'

capitalize('hello') // 'Hello'
capitalize('HELLO') // 'Hello'
capitalize('hELLO') // 'Hello'
capitalize('vitest') // 'Vitest'
```

---

## randomStr

Generates a random string of the specified length.

### Type

```ts
function randomStr(size?: number, dict?: string): string
```

### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| size | `number?` | `16` | Length of the random string |
| dict | `string?` | nanoid default alphabet | Character set used for generating the string |

### Returns

`string` — The generated random string.

### Example

```ts
import { randomStr } from '@lonewolfyx/utils'

// Generate a 16-character random string by default
randomStr() // 'a1b2c3d4e5f6g7h8'

// Specify length
randomStr(8) // 'a1b2c3d4'
randomStr(32) // 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'

// Custom character set
randomStr(6, '0123456789') // '384917'
```

---

## md5

Computes the MD5 hash of a string.

### Type

```ts
function md5(content: string): string
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| content | `string` | The string to hash |

### Returns

`string` — A 32-character lowercase hexadecimal MD5 hash.

### Example

```ts
import { md5 } from '@lonewolfyx/utils'

md5('hello') // '5d41402abc4b2a76b9719d911017c592'
md5('123456') // 'e10adc3949ba59abbe56e057f20f883e'
```

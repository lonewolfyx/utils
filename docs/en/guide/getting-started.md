# Getting Started

## Installation

```bash
# npm
npm install @lonewolfyx/utils

# pnpm
pnpm add @lonewolfyx/utils

# yarn
yarn add @lonewolfyx/utils
```

## Usage

### Tree Shaking

It is recommended to import only the functions you need:

```ts
import { capitalize, formatNumber, sleep } from '@lonewolfyx/utils'

// Number formatting with thousand separators
formatNumber(1234567) // '1,234,567'

// Capitalize the first letter
capitalize('hello') // 'Hello'

// Async delay
await sleep(1000) // Wait 1 second
```

### Full Import

```ts
import * as utils from '@lonewolfyx/utils'

utils.formatNumber(1234567)
utils.capitalize('hello')
utils.md5('123456')
```

## API Overview

| Module | Function | Description |
| --- | --- | --- |
| format | `formatNumber` | Number formatting with thousand separators |
| promise | `sleep` | Promise-based delay function |
| schedule | `createSchedule` | Chainable task scheduler |
| string | `capitalize` | Capitalize the first letter |
| string | `randomStr` | Generate random strings |
| string | `md5` | MD5 hash computation |

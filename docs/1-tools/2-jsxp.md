---
sidebar_position: 2
---

# jsxp

## 截图

:::tip jsxp
[jsxp](https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp) 是一个可以在 tsx 环境中，使用 puppeteer 对 React (tsx) 组件进行截图的库。
:::

| Project | Status              | Description                 |
| ------- | ------------------- | --------------------------- |
| [jsxp]  | [![jsxp-s]][jsxp-p] | 使用 puppeteer 进行截图的库 |

[jsxp]: https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp
[jsxp-s]: https://img.shields.io/npm/v/jsxp.svg
[jsxp-p]: https://www.npmjs.com/package/jsxp

> 若使用VScode进行开发：安装插件 `ES7+ React/Redux/React-Native snippets`

```sh title="安装"
yarn add jsxp -W
```

> 自动搜索浏览器内核

```js title=".puppeteerrc.cjs"
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = require('jsxp/.puppeteerrc')
```

### 使用示例

#### 渲染React组件为图片buffer

```tsx title="src/hello.tsx"
// 示例react组件
import React from 'react'
export default () => {
  return (
    <html>
      <body>
        <div>hello React !</div>
      </body>
    </html>
  )
}
```

```ts title="src/index.ts"
import { renderComponentToBuffer } from 'jsxp'
import Hello from './hello'

const img: Buffer | false = await renderComponentToBuffer('hello', Hello, {})
if (img) {
  // 可fs保存到本地
}
```

#### 渲染组件为HTML字符串再截图

```ts title="src/index.ts"
import { renderComponentIsHtmlToBuffer } from 'jsxp'
import Hello from './hello'

const img: Buffer | null = await renderComponentIsHtmlToBuffer(Hello, {})
if (img) {
  // 可fs保存到本地
}
```

#### 直接渲染HTML字符串

```ts
import { renderHtmlToBufferDirect } from 'jsxp'

const htmlContent = '<html><body><div>Hello World!</div></body></html>'
const img: Buffer | null = await renderHtmlToBufferDirect(htmlContent, {})
if (img) {
  // 可fs保存到本地
}
```

#### 使用队列渲染HTML字符串

```ts
import { renderHtmlToBuffer } from 'jsxp'

const htmlContent = '<html><body><div>Hello World!</div></body></html>'
const img: Buffer | null = await renderHtmlToBuffer(htmlContent, {})
if (img) {
  // 可fs保存到本地
}
```

### 本地调试

```ts
import('jsxp').then(res => res.createServer())
```

```tsx title="jsxp.config.tsx"
import React from 'react'
import Hello from './hello'
import { defineConfig } from 'jsxp'

export default defineConfig({
  routes: {
    '/hello': {
      component: <Hello data={(123456, {})} />
    }
  }
})
```

```sh title="使用lvyjs启动截图热开发"
npx lvy dev --view
```

### 背景图

```tsx
import React from 'react'
import { BackgroundImage } from 'jsxp'
import img_url from './resources/example.pn'

export default function Word() {
  return (
    <html>
      <body>
        <BackgroundImage src={img_url} size="100% 100%">
          <div>我有了一个背景图</div>
        </BackgroundImage>
      </body>
    </html>
  )
}
```

### 样式资源

```tsx title="./link.tsx"
import { LinkStyleSheet, LinkESM } from 'jsxp'

export default function Word() {
  return (
    <html>
      <head>
        {          // 绝对路径        }
        <LinkStyleSheet src="/cwd/resources/css/hello.css" />
      </head>
      <body></body>
    </html>
  )
}
```

# unplugin-auto-import-ahooks

English / [简体中文](./README.zh-CN.md)

`unplugin-auto-import-ahooks` is a resolver for [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) that enables on-demand importing of ahooks.

## Features

- Support `Vite`, `Webpack` and more
- Automatically imports hooks from `ahook`

## Installation

### npm

```bash
npm i -D unplugin-auto-import-ahooks unplugin-auto-import
```

### yarn

```bash
yarn add -D unplugin-auto-import-ahooks unplugin-auto-import
```

### pnpm

```bash
pnpm add -D unplugin-auto-import-ahooks unplugin-auto-import
```

### bun

```bash
bun add -D unplugin-auto-import-ahooks unplugin-auto-import
```

## Usage

### Vite

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import AhooksResolver from 'unplugin-auto-import-ahooks'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [AhooksResolver()]
    })
  ]
})
```

### Webpack

```js
// webpack.config.js
const AhooksResolver = require('unplugin-auto-import-ahooks')

module.exports = {
  /* ... */
  plugins: [
    require('unplugin-auto-import/webpack')({
      resolvers: [AntdAhooksResolverResolver()]
    })
  ]
}
```

## License

[MIT](/LICENSE) License &copy; 2024 [Bruce Song](https://github.com/recallwei)

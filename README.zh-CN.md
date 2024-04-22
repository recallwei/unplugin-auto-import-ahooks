# unplugin-auto-import-ahooks

[English](./README.md) / 简体中文

`unplugin-auto-import-ahooks` 是 [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 的一个解析器，用于实现 ahooks 按需引入。

## 特性

- 支持 `Vite`, `Webpack` 等
- 支持自动引入 `ahooks`

## 安装

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

## 使用

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
      resolvers: [AhooksResolver()]
    })
  ]
}
```

## License

[MIT](/LICENSE) License &copy; 2024 [Bruce Song](https://github.com/recallwei)

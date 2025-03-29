# 快速上手

ZayUi 致力于提供给程序员愉悦的开发体验。

## 安装

```bash
# npm 安装
npm install zay-ui

# yarn 安装
yarn add zay-ui

# pnpm 安装
pnpm add zay-ui

```

## 全局引入

```javascript
import { createApp } from 'vue';
import ZayUi from 'zay-ui';
import 'zay-ui/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ZayUi);
app.mount('#app');
```

## 按需引入

```javascript
import { createApp } from 'vue';
import { Button, Input } from 'zay-ui';
import 'zay-ui/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(Button);
app.use(Input);
app.mount('#app');
```

## umd

安装包下来，umd 文件可以直接使用 cdn 方式引入，无需打包。

```html
<script src="https://unpkg.com/zay-ui.js"></script>
```

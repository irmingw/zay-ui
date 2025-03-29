# Icon 图标组件

图标组件是采用 iconfont css 方式实现，
因此你需要引入 css 文件和 js 文件，才能正常使用图标组件。

## 安装 Icon

```bash
npm install zay-icon
```

## 使用 Icon

```js
import Vue from 'vue';
import ZayIcon from 'zay-icon';
// 引入样式文件
import 'zay-icon/dist/index.css';
Vue.use(ZayIcon);
```

## 示例

<z-icon name="search" />
```html
<z-icon name="search" />
```

## 图标列表

<div class="icon_wrapper">
  <section class="icon_item" v-for="item in icons.glyphs">
    <z-icon :name="item.font_class" size="32px"/>
    <span>{{item.font_class}}</span>
  </section>
</div>

<style scoped>
  .icon_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .icon_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 180px;
    text-align: center;
    border-radius: 4px;
    transition: all .3s;

    &:hover {
      background-color: var(--z-color-primary-5);
      color: var(--z-color-text-1)
    }

  }


</style>

<script setup>
  import icons from './public/json/iconfont'
</script>

## API

### Props

| 参数 | 说明

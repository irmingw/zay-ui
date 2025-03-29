# 主题

ZayUI 设计规范和技术上支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于全局样式（主色、圆角、边框）和指定组件的视觉定制。

## 主题定制方式

ZayUI 支持两种主题定制方式：

1. **全局样式变量**：通过修改全局样式变量来改变整个项目的视觉风格。这种方式适用于对整个项目进行统一的视觉调整。
2. **组件级样式覆盖**：针对特定组件的样式进行调整，以满足特定的设计需求。这种方式更加灵活，可以实现对单个或少数几个组件样式的精细控制。

## 全局样式变量

ZayUI 提供了一套全局样式变量，用于控制项目的整体视觉风格。这些变量的命名遵循一定的规范，例如颜色、字体大小等。通过修改这些变量，可以轻松地调整整个项目的外观和感觉。

```css
:root {
  /* 主色彩 */
  --z-color-error-1: #fff2e8;
  --z-color-error-2: #ffd8bf;
  --z-color-error-3: #ffbb96;
  --z-color-error-4: #ff7a45;
  --z-color-error-5: #fa541c;
  --z-color-error-6: #d4380d;
  --z-color-warning-1: #fff7e6;
  --z-color-warning-2: #ffe7ba;
  --z-color-warning-3: #ffd591;
  --z-color-warning-4: #ffa940;
  --z-color-warning-5: #fa8c16;
  --z-color-warning-6: #d46b08;
  --z-color-success-1: #e8ffe6;
  --z-color-success-2: #adf7a6;
  --z-color-success-3: #7deb78;
  --z-color-success-4: #28d12b;
  --z-color-success-5: #13b510;
  --z-color-success-6: #009e0d;
  --z-color-primary-1: #e6f4ff;
  --z-color-primary-2: #bae0ff;
  --z-color-primary-3: #91caff;
  --z-color-primary-4: #4096ff;
  --z-color-primary-5: #1677ff;
  --z-color-primary-6: #0958d9;
  --z-color-info-1: #f5f5f5;
  --z-color-info-2: #dadada;
  --z-color-info-3: #b0aeae;
  --z-color-info-4: #595959;
  --z-color-info-5: #434343;
  --z-color-info-6: #262626;

  /* 字体 */
  --z-color-text-1: #fff;
  --z-color-text-2: #fafafa;
  --z-color-text-3: #c1c1c1;
  --z-color-text-4: #8c8c8c;
  --z-color-text-5: #565656;
  --z-color-text-6: #262626;

  /* 边框 */
  --z-color-border-1: #e5e5e5;
  --z-color-border-2: #d9d9d9;

  /* 背景 */
  --z-color-bg-1: #ffffff;
  --z-color-bg-2: #fafafa;
  --z-color-bg-3: #f6f6f6;
  --z-color-bg-4: #f0f0f0;
  --z-color-bg-5: #e5e5e5;

  --z-color-mask: rgba(0, 0, 0, 0.5);
  --z-color-action-1: rgba(0, 0, 0, 0.05);
  --z-color-action-2: rgba(0, 0, 0, 0.1);

  /* size */
  --z-size-mini: 28px;
  --z-size-small: 32px;
  --z-size-large: 40px;

  /* 圆角 */
  --z-radius: 4px;
}
```

## 组件级样式覆盖

对于需要针对特定组件进行样式定制的场景，可以通过以下方式实现：

1. **使用 CSS 选择器**：直接在项目中添加或修改对应的 CSS 选择器的样式规则，以覆盖默认样式。这种方式适用于简单的样式调整。

# Colors 色彩

ZayUI 色彩是采用 css 变量方式定义，方便修改。方便你快速定义自己的主题色。

## 色彩定义

ZayUI 采用 css 变量，你可以通过修改 css 变量来改变颜色。

## 主色彩

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-primary-${index})`,
      }"
    >
      primary {{ index }}
    </div>
</div>

## 报错色彩

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-error-${index})`,
      }"
    >
      error {{ index }}
    </div>
</div>

## 成功色彩

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-success-${index})`,
      }"
    >
      success {{ index }}
    </div>
</div>

## 警告色彩

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-warning-${index})`,
      }"
    >
      warning {{ index }}
    </div>
</div>

## 信息色彩

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-info-${index})`,
      }"
    >
      info {{ index }}
    </div>
</div>

## 字体色

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 6"
      :key="index"
      :style="{
        '--color': `var(--z-color-text-${index})`,
      }"
    >
      text {{ index }}
    </div>
</div>

## 边框色

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 2"
      :key="index"
      :style="{
        '--color': `var(--z-color-border-${index})`,
      }"
    >
      border {{ index }}
    </div>
</div>

## 背景色

 <div class="card_wrapper">
    <div
      class="card"
      v-for="index in 5"
      :key="index"
      :style="{
        '--color': `var(--z-color-bg-${index})`,
        color: '#000',
        border: '1px solid #000'
      }"
    >
      background {{ index }}
    </div>
</div>

<style lang="scss" scoped>
  .card_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    margin: 24px 0;
  }
  .card {
    min-width: 30%;
    max-width: 33%;
    flex: 1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: var(--color);
    color: #f6f6f6;
    /* 小于3的元素 */
    &:nth-child(-n+3) {
      color: #000;
    }

  }
  </style>

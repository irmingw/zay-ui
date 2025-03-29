<style scoped lang="scss">
  .button_test {
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    gap: 8px;
    margin: 12px 0;
  }

  </style>

# Button 按钮

按钮用于执行一个即时操作。

## Color 属性

<div class="button_test">
  <z-button color="default">BUTTON</z-button>
  <z-button color="primary">BUTTON</z-button>
  <z-button color="danger">BUTTON</z-button>
  <z-button color="warning">BUTTON</z-button>
  <z-button color="success">BUTTON</z-button>
  <z-button color="info">BUTTON</z-button>
</div>

<div class="button_test">
  <z-button color="primaryLight">BUTTON</z-button>
  <z-button color="dangerLight">BUTTON</z-button>
  <z-button color="successLight">BUTTON</z-button>
  <z-button color="warningLight">BUTTON</z-button>
  <z-button color="infoLight">BUTTON</z-button>
</div>

```html
<z-button color="default">BUTTON</z-button>
<z-button color="primary">BUTTON</z-button>
<z-button color="danger">BUTTON</z-button>
<z-button color="warning">BUTTON</z-button>
<z-button color="success">BUTTON</z-button>
<z-button color="info">BUTTON</z-button>

<z-button color="primaryLight">BUTTON</z-button>
<z-button color="dangerLight">BUTTON</z-button>
<z-button color="successLight">BUTTON</z-button>
<z-button color="warningLight">BUTTON</z-button>
<z-button color="infoLight">BUTTON</z-button>
```

## Shape 属性

<div class="button_test">
  <z-button color="primary" shape="circle">
    <z-icon name="plus"></z-icon>
  </z-button>
  <z-button color="primaryLight" shape="circle">
    <z-icon name="plus"></z-icon>
  </z-button>
  <z-button color="info" shape="round">BUTTON</z-button>
  <z-button color="success" shape="round">BUTTON</z-button>
  <z-button color="primary" shape="square">
    <z-icon name="plus"></z-icon>
  </z-button>
  <z-button color="primaryLight" shape="square">
    <z-icon name="plus"></z-icon>
  </z-button>
</div>

```html
<z-button color="primary" shape="circle">
  <z-icon name="plus"></z-icon>
</z-button>
<z-button color="primaryLight" shape="circle">
  <z-icon name="plus"></z-icon>
</z-button>
<z-button color="info" shape="round">BUTTON</z-button>
<z-button color="success" shape="round">BUTTON</z-button>
<z-button color="primary" shape="square">
  <z-icon name="plus"></z-icon>
</z-button>
<z-button color="primaryLight" shape="square">
  <z-icon name="plus"></z-icon>
</z-button>
```

## Size 属性

<div class="button_test">
  <z-button size="mini">BUTTON</z-button>
  <z-button size="small">BUTTON</z-button>
  <z-button size="large">BUTTON</z-button>
</div>

```html
<z-button size="mini">BUTTON</z-button>
<z-button size="small">BUTTON</z-button>
<z-button size="large">BUTTON</z-button>
```

## Disabled 属性

<div class="button_test">
  <z-button disabled color="primary">BUTTON</z-button>
</div>

```html
<z-button disabled color="primary">BUTTON</z-button>
```

## Loading 属性

<div class="button_test">
  <z-button loading color="primary">BUTTON</z-button>
</div>

```html
<z-button loading color="primary">BUTTON</z-button>
```

## isText 属性

<div class="button_test">
  <z-button isText color="default">BUTTON</z-button>
  <z-button isText color="primary">BUTTON</z-button>
  <z-button isText color="success">BUTTON</z-button>
  <z-button isText color="danger">BUTTON</z-button>
  <z-button isText color="warning">BUTTON</z-button>
  <z-button isText color="info">BUTTON</z-button>
</div>

```html
<z-button isText color="default">BUTTON</z-button>
<z-button isText color="primary">BUTTON</z-button>
<z-button isText color="success">BUTTON</z-button>
<z-button isText color="danger">BUTTON</z-button>
<z-button isText color="warning">BUTTON</z-button>
<z-button isText color="info">BUTTON</z-button>
```

## Attributes

## Events

| 事件名 | 说明               |
| ------ | ------------------ |
| click  | 点击按钮时触发     |
| focus  | 按钮获得焦点时触发 |
| blur   | 按钮失去焦点时触发 |

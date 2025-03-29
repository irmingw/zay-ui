# Button Group 按钮组

按钮组可以将多个按钮组合在一起，并以同一尺寸和样式显示。

## 用法

使用 `direction` 属性设置按钮组的方向。使用 `size` 属性设置按钮组的尺寸。

## Direction

`horizontal` | `vertical`

<z-button-group>
  <z-button color="primary">LEFT</z-button>
  <z-button color="primary">CENTER</z-button>
  <z-button color="primary">RIGHT</z-button>
</z-button-group>

```html
<z-button-group>
  <z-button color="primary">Button 1</z-button>
  <z-button color="primary">Button 2</z-button>
  <z-button color="primary">Button 3</z-button>
</z-button-group>
```

<z-button-group direction="vertical">
  <z-button color="info">Button 1</z-button>
  <z-button color="info">Button 2</z-button>
  <z-button color="info">Button 3</z-button>
</z-button-group>

```html
<z-button-group direction="vertical">
  <z-button color="info">Button 1</z-button>
  <z-button color="info">Button 2</z-button>
  <z-button color="info">Button 3</z-button>
</z-button-group>
```

## Size

值: `large` | `small` | `mini`
<z-button-group size="large">
<z-button color="warning">Button 1</z-button>
<z-button color="warning">Button 2</z-button>
<z-button color="warning">Button 3</z-button>
</z-button-group>

```html
<z-button-group size="large">
  <z-button color="warning">Button 1</z-button>
  <z-button color="warning">Button 2</z-button>
  <z-button color="warning">Button 3</z-button>
</z-button-group>
```

<z-button-group size="small">
  <z-button color="success">Button 1</z-button>
  <z-button color="success">Button 2</z-button>
  <z-button color="success">Button 3</z-button>
</z-button-group>

```html
<z-button-group size="small">
  <z-button color="success">Button 1</z-button>
  <z-button color="success">Button 2</z-button>
  <z-button color="success">Button 3</z-button>
</z-button-group>
```

<z-button-group size="mini">
  <z-button color="default">Button 1</z-button>
  <z-button color="default">Button 2</z-button>
  <z-button color="default">Button 3</z-button>
</z-button-group>

```html
<z-button-group layout="x" size="mini">
  <z-button color="default">Button 1</z-button>
  <z-button color="default">Button 2</z-button>
  <z-button color="default">Button 3</z-button>
</z-button-group>
```

## API

### Button Group Props

| Prop        | color                   | Default      | Description                              |
| ----------- | ----------------------- | ------------ | ---------------------------------------- |
| `direction` | `horizontal` `vertical` | `horizontal` | Layout of the buttons (x or y)           |
| `size`      | `small` `mini` `large`  | `small`      | Size of the buttons (large, small, mini) |

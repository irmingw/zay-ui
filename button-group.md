# Button Group

Button Group Is a group of buttons. It can be used to perform a series of related operations in a single operation.

## Useage

Use `direction` attribute to set the direction of button group.

User `size` attribute to set the size of button group.

## Direction

values: `horizontal` | `vertical`

<z-button-group>
  <z-button color="primary">Button 1</z-button>
  <z-button color="primary">Button 2</z-button>
  <z-button color="primary">Button 3</z-button>
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

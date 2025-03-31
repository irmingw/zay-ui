# Input 输入框

input 输入框，用于接收用户的文本输入。

## 基本用法

在基本用法中，你可以使用 `ZInput` 组件来创建一个简单的输入框。

<z-input v-model="value" placeholder="请输入内容"></z-input>

<script setup>
  import { ref } from 'vue'
  const value = ref('')
</script>

```html
<z-input v-model="value" placeholder="请输入内容"></z-input>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## 禁用状态

你可以通过设置 `disabled` 属性来禁用输入框。

<z-input v-model="value" placeholder="请输入内容" disabled></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" disabled></z-input>
```

## 只读状态

你可以通过设置 `readonly` 属性来使输入框变为只读状态。

<z-input v-model="value" placeholder="请输入内容" readonly></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" readonly></z-input>
```

## 尺寸

你可以通过设置 `size` 属性来控制输入框的尺寸。

<z-input v-model="value" placeholder="请输入内容" size="large"></z-input>
<z-input v-model="value" placeholder="请输入内容" size="small"></z-input>
<z-input v-model="value" placeholder="请输入内容" size="mini"></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" size="large"></z-input>
<z-input v-model="value" placeholder="请输入内容" size="small"></z-input>
<z-input v-model="value" placeholder="请输入内容" size="mini"></z-input>
```

## 前缀和后缀

你可以通过设置 `prefix` 和 `suffix` 属性来在输入框前后添加图标或文本。

<z-input v-model="value" placeholder="请输入内容" prefix="🔍"></z-input>
<z-input v-model="value" placeholder="请输入内容" suffix="@"></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" prefix="🔍"></z-input>
<z-input v-model="value" placeholder="请输入内容" suffix="@"></z-input>
```

可以设置 `prefix` 和 `suffix` 插槽来自定义前缀和后缀内容。

<z-input v-model="value" placeholder="请输入内容">
  <template #prefix>
    <z-icon name="search"></z-icon>
  </template>
  <template #suffix>
    <z-icon name="search"></z-icon>
    </template>
</z-input>

```html
<z-input v-model="value" placeholder="请输入内容">
  <template #prefix>
    <z-icon name="search"></z-icon>
  </template>
  <template #suffix>
    <z-icon name="search"></z-icon>
  </template>
</z-input>
```

## 可清除

你可以通过设置 `clearable` 属性来在输入框中添加一个清除按钮。

<z-input v-model="value" placeholder="请输入内容" clearable></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" clearable></z-input>
```

## 密码

你可以通过设置 `type` 属性为 "password" 来创建一个密码输入框。设置 `show-eye` 属性可以显示/隐藏密码。

<z-input v-model="value" placeholder="请输入内容" type="password" show-eye></z-input>

```html
<z-input
  v-model="value"
  placeholder="请输入内容"
  type="password"
  show-eye></z-input>
```

## 前置/后置标签

你可以通过设置 `prepend` 和 `append` 属性来在输入框前后添加文本标签。

<z-input v-model="value" placeholder="请输入内容" prepend="http://"></z-input>
<z-input v-model="value" placeholder="请输入内容" append=".com"></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" prepend="http://"></z-input>
<z-input v-model="value" placeholder="请输入内容" append=".com"></z-input>
```

可以设置 `prepend` 和 `append` 插槽来自定义前置和后置内容。

<z-input v-model="value" placeholder="请输入内容">
  <template #prepend>
    https://
  </template>
  <template #append>
    .com
  </template>
</z-input>

```html
<z-input v-model="value" placeholder="请输入内容">
  <template #prepend> https:// </template>
  <template #append> .com </template>
</z-input>
```

## 文本域

你可以通过设置 `type` 属性为 "textarea" 来创建一个文本域。

<z-input v-model="value" placeholder="请输入内容" type="textarea"></z-input>

```html
<z-input v-model="value" placeholder="请输入内容" type="textarea"></z-input>
```

设置 `rows` 属性可以控制文本域的行数。

<z-input v-model="value" placeholder="请输入内容" type="textarea" rows="3"></z-input>

```html
<z-input
  v-model="value"
  placeholder="请输入内容"
  type="textarea"
  rows="3"></z-input>
```

## 显示字数统计

你可以通过设置 `show-count` 和 `maxlength` 属性来显示字数统计。

<z-input v-model="value" placeholder="请输入内容" type="textarea" show-count maxlength="50"></z-input>

```html
<z-input
  v-model="value"
  placeholder="请输入内容"
  type="textarea"
  show-count
  maxlength="50"></z-input>
```

<z-input v-model="value" placeholder="请输入内容" type="text" show-count maxlength="50"></z-input>

```html
<z-input
  v-model="value"
  placeholder="请输入内容"
  type="text"
  show-count
  maxlength="50"></z-input>
```

## 事件

可以通过 `change` 事件监听输入框内容变化。

<z-input v-model="value" placeholder="请输入内容" @change="handleChange"></z-input>

```html
<z-input
  v-model="value"
  placeholder="请输入内容"
  @change="handleChange"></z-input>
```

```js
const handleChange = (val) => {
  console.log(val);
};
```

支持 focus 和 blur 事件。通过 ref 调用 focus 和 blur 方法。

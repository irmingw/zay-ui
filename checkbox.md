# Checkbox 多选框

Checkbox 多选框用于在一组可选项中进行多项选择。

## 基本用法

单独使用可以表示两种状态间切换。设置`v-model`绑定变量，可直接将变量值设置为`true`或`false`。
在`z-checkbox`元素中定义`v-model="checked"`绑定变量，单一的`checkbox`表示两种状态（选中与否），`checked`的状态可以通过`change`事件来实时获悉。
<z-checkbox v-model="checked">备选项</z-checkbox>

```html
<template>
  <z-checkbox v-model="checked">备选项</z-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
      };
    },
  };
</script>
```

## 禁用状态

多选框不可用状态。

设置`disabled`属性即可。

<z-checkbox v-model="checked" disabled>备选项</z-checkbox>

```html
<template>
  <z-checkbox v-model="checked" disabled>备选项</z-checkbox>
</template>
```

## 只读状态

多选框只读不可更改状态。

设置`readonly`属性即可。

<z-checkbox v-model="checked" readonly>备选项</z-checkbox>

```html
<template>
  <z-checkbox v-model="checked" readonly>备选项</z-checkbox>
</template>
```

## 半选择状态

多选框半选择状态。

设置`indeterminate`属性即可。

<z-checkbox :indeterminate="im">备选项</z-checkbox>

```html
<template>
  <z-checkbox :indeterminate="im">备选项</z-checkbox>
</template>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示那一项的选项状态。

<z-checkbox v-model="checkAll" @change="onChange" :indeterminate="indeterminate">全选</z-checkbox>

<z-checkbox v-model="checkList" @change="onItemChange" :label="item" :value="item" v-for="item in renderList"></z-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true,
        checkList: [],
        renderList: ['苹果', '香蕉', '橙子'],
        checkAll: false,
        indeterminate: false,
        im:true
      };
    },
    methods:{
      onChange(){
        this.checkList = this.checkAll ? ['苹果', '香蕉', '橙子'] : []
        this.indeterminate = false;
      },
      onItemChange(val) {
        this.checkAll = val.length === this.renderList.length;
        this.indeterminate = val.length > 0 && !this.checkAll;
      }
    }
  };
</script>

```html
<template>
  <z-checkbox
    v-model="checkAll"
    @change="onChange"
    :indeterminate="indeterminate"
    >全选</z-checkbox
  >

  <z-checkbox
    v-model="checkList"
    @change="onItemChange"
    :label="item"
    :value="item"
    v-for="item in renderList"></z-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        checkList: [],
        renderList: ['苹果', '香蕉', '橙子'],
        checkAll: false,
        indeterminate: false,
      };
    },
    methods: {
      onChange() {
        this.checkList = this.checkAll ? this.renderList : [];
        this.indeterminate = false;
      },
      onItemChange(val) {
        this.checkAll = val.length === this.renderList.length;
        this.indeterminate = val.length > 0 && !this.checkAll;
      },
    },
  };
</script>
```

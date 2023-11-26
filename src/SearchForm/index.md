---
nav: 组件
group:
  title:
  path: /components
---

## SearchForm

搜索表单，主要用于列表，图标之类需要通过不同条件查询数据的场景。

是对 [Form](/components/form) 组件的进一步封装。

当用于 Table 场景时，可直接使用[Table](/componets/table)组件。

### 基本使用

<code src="./demos/base.tsx"></code>

### 参数

| 属性         | 描述                 | 类型                 | 默认值 |
| ------------ | -------------------- | -------------------- | ------ |
| items        | 表单项               | `FormItem[]`         |        |
| onSearch     | 点击搜索按钮回调函数 | `() => Promise<any>` |        |
| onReset      | 点击重置按钮回调函数 | `()=> void`          |        |
| initialCount | 默认展示表单项的数量 | `number`             | 2      |

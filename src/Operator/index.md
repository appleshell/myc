---
nav: 组件
group:
  title:
  path: /components
---

## Operator

Table 组件操作栏元素过多时，用`更多`隐藏多余元素，取而代之的是下拉 menu。

### 使用

<code src="./demos/base.tsx"></code>

### 参数

| 属性      | 描述               | 类型                     | 默认值 |
| --------- | ------------------ | ------------------------ | ------ |
| length    | 显示可操作元素数量 | `number`                 | 2      |
| moreAlias | `更多`的别名       | `string \| ReactElement` | 更多   |

---
group:
  title: Components
  path: /components
---

## AsyncButton

封装按钮点击处理异步逻辑，简化loading操作。

### 使用

<code src="./demo/base.tsx" />

### 参数

所有参数继承自Ant Design的Button组件。

| 属性       | 描述           | 类型                          | 默认值  |
| ---------- | -------------- | ----------------------------- | ------- |
| onClick      | 点击按钮时的回调函数   | `(event: MouseEvent) => Promise` | -       |
---
nav: 组件
group:
  title:
  path: /components
---

# AsyncButton

封装按钮点击处理异步逻辑，简化 loading 操作。

### 使用

<code src="./demos/base.tsx">基本</code>

### 参数

参数与 Antd 的 Button 组件的参数一致，赋值给 onClick 属性的函数必须返回 Promise

| 属性    | 描述                            | 类型          | 默认值 |
| ------- | ------------------------------- | ------------- | ------ |
| onClick | 点击按钮时的回调, 返回`Promise` | () => Promise | -      |

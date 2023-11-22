---
nav: 组件
group:
  title:
  path: /components
---

# Form

对 Form 增强，支持 `items` 配置模式，方便增删改查。

特点：

- [x] 通过数据配置生成表单
- [x] 支持混合模式
- [x] 可以根据条件渲染表单项
- [x] 灵活布局，默认单行，可以任意多行且支持响应式切换

### 使用

#### 默认模式

<code src="./demos/base.tsx"></code>

#### 混合模式

<code src="./demos/multipleMode.tsx"></code>

#### 条件渲染

<code src="./demos/isHidden.tsx"></code>

#### 多种布局

<code src="./demos/layoutCol.tsx"></code>

#### 设置初始值

<code src="./demos/initialValues.tsx"></code>

### 参数

| 属性          | 描述                                                         | 类型                                                | 默认值         |
| ------------- | ------------------------------------------------------------ | --------------------------------------------------- | -------------- |
| items         | 表单项                                                       | `FormItem[]`                                        | -              |
| isView        | 是否只读                                                     | `boolean`                                           | `false`        |
| layoutCol     | 布局                                                         | [ColProps](https://ant.design/components/grid/#Col) | `{ span: 24 }` |
| initialValues | 初始化值，只会触发一次，支持 `Promise` 从接口拿到数据        | `Store \| (() => Promise<Store>)`                   | -              |
| placeholder   | 占位符(View 模式下数据为 `null` `undefined` `''` 显示的文字) | `string`                                            | -              |
| childrenProps | children 参数， `single` 是否为单行模式                      | `{single?: boolean}`                                | -              |

#### FormItem

| 属性        | 描述                                                         | 类型                                                                     | 默认值                       |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ | ---------------------------- |
| render      | 编辑模式下渲染方法                                           | `(fieldValue: StoreValue, fieldsValue: Store) => ReactElement`           | `() => <Input allowClear />` |
| renderView  | 只读模式下渲染方法                                           | `(fieldValue: StoreValue, fieldsValue: Store) => ReactNode`              | `fieldValue`                 |
| isView      | 是否只读                                                     | `boolean`                                                                | Form `isView`                |
| pipeline    | 输入输出过滤                                                 | `OutputPipeline \| [InputPipeline, OutputPipeline]`                      | -                            |
| disabled    | 是否禁用                                                     | `boolean`                                                                | false                        |
| isHidden    | 是否隐藏                                                     | `(fieldValue: StoreValue, fieldsValue: Store) => boolean`                | -                            |
| layoutCol   | 布局                                                         | [ColProps](https://ant.design/components/grid/#Col)                      | Form `layoutCol`             |
| extraNames  | 额外的 name                                                  | `NamePath[]`                                                             | -                            |
| placeholder | 占位符(View 模式下数据为 `null` `undefined` `''` 显示的文字) | `string`                                                                 | `-`                          |
| type        | 默认类型                                                     | `divider` `subTitle`                                                     | `-`                          |
| suffix      | 设置后置标签                                                 | `ReactNode \| (fieldValue: StoreValue, fieldsValue: Store) => ReactNode` | `-`                          |
| tips        | 设置提示标签                                                 | `ReactNode \| (fieldValue: StoreValue, fieldsValue: Store) => ReactNode` | `-`                          |

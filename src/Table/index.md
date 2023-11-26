---
nav: 组件
group:
  title:
  path: /components
---

## Table

封装[SearchForm](/components/search-form)组件和 antd 的 Table 组件，提高列表数据展示页面的开发效率。

### 基本使用

<code src="./demos/base.tsx"></code>

### 参数

| 属性              | 描述                                             | 类型                                      | 默认值                                                                                                |
| ----------------- | ------------------------------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| searchProps       | 设置 searchForm 的属性                           | 扩展自 SearchForm 属性                    |                                                                                                       |
| queryData         | 获取要展示的列表数据，通常是请求接口数据获得     | `(formValue, pagination) => Promise<any>` |                                                                                                       |
| dataSource        | 数据源                                           | `Array<any>`                              |                                                                                                       |
| defaultPagination | 默认的分页配置，当 pagination 为 false 时不生效  |                                           | `{current: 1,total: 0,pageSize: 10,pageSizeOptions: ['10', '20', '50', '100'],showSizeChanger: true}` |
| toolSection       | 设置工具栏，常位于 searcForm 和 Table 之间的位置 | `ReactElement`                            |                                                                                                       |

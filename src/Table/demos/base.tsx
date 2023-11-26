import React, { useState } from 'react';
import { Table } from 'myc';
import { DatePicker, Select } from 'antd';

const dataSourceMock = [
  { name: '小明', age: 15, grade: 8 },
  { name: '小红', age: 15, grade: 9 },
  { name: '小刚', age: 13, grade: 7 },
];

const cityOptions = [
  { label: '北京', value: 1 },
  { label: '上海', value: 2 },
  { label: '深圳', value: 3 },
  { label: '广州', value: 4 },
];

const TableBase = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const items = [
    { name: 'name', label: '姓名' },
    { name: 'mobile', label: '电话' },
    { name: 'age', label: '年龄' },
    { name: 'birthday', label: '生日', render: () => <DatePicker /> },
    { name: 'hobby', label: '爱好' },
    { name: 'school', label: '学校' },
    { name: 'grade', label: '年级' },
    {
      name: 'city',
      label: '城市',
      render: () => <Select options={cityOptions} allowClear />,
    },
  ];

  const tableColumn = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '年级',
      dataIndex: 'grade',
    },
  ];

  const queryListData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        setDataSource(dataSourceMock);
        resolve('success');
      }, 2000);
    });

  return (
    <Table
      searchProps={{ items }}
      columns={tableColumn}
      dataSource={dataSource}
      queryData={queryListData}
    />
  );
};

export default TableBase;

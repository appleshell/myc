import React from 'react';
import { Operator, SearchForm } from 'myc';
import { Table, message, DatePicker, Select } from 'antd';
import { StoreValue } from 'antd/es/form/interface';

const dataSource = [
  { name: '小明', age: 15 },
  { name: '小红', age: 15 },
];

const cityOptions = [
  { label: '北京', value: 1 },
  { label: '上海', value: 2 },
  { label: '深圳', value: 3 },
  { label: '广州', value: 4 },
];

const OperatorBase = () => {
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

  const handleOperate = (msg: string) => {
    message.info(msg);
  };

  const tableColumn = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: '操作',
      dataIndex: 'operator',
      render: () => (
        <Operator length={3}>
          <a onClick={() => handleOperate('add')}>新增</a>
          <a onClick={() => handleOperate('edit')}>编辑</a>
        </Operator>
      ),
    },
  ];

  const handleSearch = (searchParams: StoreValue) => {
    console.log(searchParams);
  };

  const handleReset = () => {
    console.log('reset');
  };

  return (
    <>
      <SearchForm
        items={items}
        onSearch={handleSearch}
        onReset={handleReset}
        initialValues={{ city: 2 }}
      />
      <Table dataSource={dataSource} columns={tableColumn} />
    </>
  );
};

export default OperatorBase;

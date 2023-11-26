import React from 'react';
import { Operator } from 'myc';
import { Table, message } from 'antd';

const OperatorBase = () => {
  const dataSource = [
    { name: '小明', age: 15 },
    { name: '小红', age: 15 },
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
          <a onClick={() => handleOperate('del')}>删除</a>
          <a onClick={() => handleOperate('open')}>跳转</a>
        </Operator>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={tableColumn} />;
};

export default OperatorBase;

import { Button, DatePicker, Switch } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { Form, FormItemProps } from 'myc';
import React from 'react';

const { useForm } = Form;

export default function BaseDemo() {
  const [form] = useForm();
  const baseItems: FormItemProps[] = [
    {
      name: 'name',
      label: '姓名',
      inputWidth: 200,
      inputMaxLength: 10,
      suffix: 'asdf',
      required: true,
    },
    {
      name: 'age',
      label: '年龄',
    },
    { name: 'birthday', label: '出生年月', render: () => <DatePicker /> },
    { name: 'hasJob', label: '已就业', render: () => <Switch /> },
  ];

  return (
    <Form
      items={baseItems}
      form={form}
      onFinish={(values: Store) =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log('BaseDemo', values);
            resolve(values);
          }, 1000);
        })
      }
    >
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form>
  );
}

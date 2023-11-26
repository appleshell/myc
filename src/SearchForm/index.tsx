import React, { FC, useState } from 'react';
import { Form, AsyncButton } from 'myc';
import { Row, Space, Form as AntdForm, Button } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { SearchFormPorps } from './type';

const { useForm } = AntdForm;

const { Item: FormItem } = Form;

const SearchForm: FC<SearchFormPorps> = ({
  form: formInstance,
  items,
  extraButtons,
  onSearch,
  onReset,
  initialCount = 3,
  ...searchPorps
}) => {
  const [form] = useForm(formInstance);
  const [isExpand, setIsExpand] = useState(false);

  const toggleForm = () => {
    setIsExpand(!isExpand);
  };

  const handleSearch = async () => {
    const formValues = await form.validateFields();
    await onSearch(formValues);
  };

  const handleReset = () => {
    form.resetFields();
    onReset?.();
  };

  return (
    <Form
      form={form}
      items={
        isExpand
          ? items
          : items.map((item, index) => {
              if (index >= initialCount) {
                return { ...item, hidden: true };
              }
              return item;
            })
      }
      onReset={handleReset}
      layoutCol={{
        span: 6,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 8,
        xl: 6,
      }}
      {...searchPorps}
    >
      <FormItem>
        <Row justify="end">
          <Space>
            <AsyncButton
              onClick={handleSearch}
              type="primary"
              icon={<SearchOutlined />}
            >
              搜索
            </AsyncButton>
            <Button htmlType="reset">重置</Button>
            {extraButtons}
            {items.length > initialCount && (
              <Button type="link" onClick={toggleForm}>
                {isExpand ? '收起' : '展开'}
                <DownOutlined rotate={isExpand ? 180 : 0} />
              </Button>
            )}
          </Space>
        </Row>
      </FormItem>
    </Form>
  );
};

export default SearchForm;

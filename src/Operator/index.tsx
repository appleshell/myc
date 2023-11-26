import React, { Children, FC, ReactNode } from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { OperatorProps } from './type';

const Operator: FC<OperatorProps> = ({
  length = 2,
  moreAlias = '更多',
  children,
}) => {
  let composition: ReactNode[] = Children.toArray(children);

  if (composition.length > length) {
    const items = composition.slice(length - 1).map((child, index) => {
      return {
        key: index,
        label: child,
      };
    });

    composition = [
      composition.slice(0, length - 1),
      <Dropdown menu={{ items }} key="operator-dropdown">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {moreAlias}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>,
    ];
  }

  return <Space>{composition}</Space>;
};

export default Operator;

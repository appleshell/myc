import React from 'react';
import { RowItem } from 'my-component-doc';

const BaseDemo = () => {
  return (
    <>
      <RowItem label="时间：">
        <span>2020-02-22 22:22:23</span>
      </RowItem>
      <RowItem label="内容标题：">
        <div>这里可以写任何内容</div>
      </RowItem>
    </>
  );
};

export default BaseDemo;

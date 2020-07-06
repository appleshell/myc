import React from 'react';
import { RowItem } from 'my-component-doc';

const TextAlignDemo = () => {
  return (
    <>
      <RowItem label="时间：" labelAlign="right" showBorder>
        <span>2020-02-22 22:22:23</span>
      </RowItem>
      <RowItem label="时间：" labelAlign="center" showBorder>
        <div>这里可以写任何内容</div>
      </RowItem>
      <RowItem label="时间：" labelAlign="left" showBorder>
        <span>2020-02-22 22:22:23</span>
      </RowItem>
    </>
  );
};

export default TextAlignDemo;

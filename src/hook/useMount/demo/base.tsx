import React from 'react';
import { Hook } from 'my-component-doc';

const { useMount } = Hook;

const Base = () => {
  useMount(() => {
    console.log('组件挂载后执行');
  });

  return <div>测试挂载</div>;
};

export default Base;

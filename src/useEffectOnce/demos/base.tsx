import React, { useState } from 'react';
import { useEffectOnce } from 'myc';
import { Button } from 'antd';

function Base() {
  const [count, setCount] = useState<number>(0);
  useEffectOnce(() => {
    console.log('只执行一次');
  });

  return (
    <div>
      <p>useEffectOnce方法的demo</p>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>click</Button>
    </div>
  );
}

export default Base;

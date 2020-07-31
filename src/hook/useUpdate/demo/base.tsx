import React, { FC } from 'react';
import { Button } from 'antd';
import { Hook } from 'my-component-doc';

const { useUpdate } = Hook;

const BaseDemo: FC = () => {
  const update = useUpdate();

  return (
    <>
      <div>{Date.now()}</div>
      <Button type="primary" onClick={update}>
        update
      </Button>
    </>
  );
};

export default BaseDemo;

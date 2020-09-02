import React, { FC } from 'react';
import { Button } from 'antd';
import { Hook } from 'my-component-doc';

const { useToggle } = Hook;

const BaseDemo: FC = () => {
  const [on, toggle] = useToggle();
  return (
    <>
      <div>{on ? 'ON' : 'OFF'}</div>
      <Button type="primary" onClick={toggle}>
        toggle
      </Button>
      <Button type="primary" onClick={() => toggle(true)}>
        setOn
      </Button>
      <Button type="primary" onClick={() => toggle(false)}>
        setOFF
      </Button>
    </>
  );
};

export default BaseDemo;

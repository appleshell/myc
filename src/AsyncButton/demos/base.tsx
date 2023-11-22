import React from 'react';
import { AsyncButton } from 'myc';

const BaseDemo = () => {
  const handleClick = () => {
    const p = new Promise((resolve) => {
      setTimeout(() => resolve(1), 1000);
    });
    return p;
  };
  return <AsyncButton onClick={handleClick}>Click</AsyncButton>;
};

export default BaseDemo;

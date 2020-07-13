import React from 'react';
import { AsyncButton } from 'my-component-doc';

const BaseDemo = () => {
  return (
    <AsyncButton
      onClick={() => new Promise(resolve => setTimeout(resolve, 1000))}
    >
      Click
    </AsyncButton>
  );
};

export default BaseDemo;

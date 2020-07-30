import React from 'react';
import { Hook } from 'my-component-doc';

const { useWindowSize } = Hook;

const BaseDemo: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        width: <span>{width}</span>
        height: <span>{height}</span>
      </p>
    </div>
  );
};

export default BaseDemo;

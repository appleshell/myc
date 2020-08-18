import React from 'react';
import { Hook } from 'my-component-doc';
import { Button } from 'antd';

const { useMethods } = Hook;

interface IState {
  count: number;
}

const initialState = {
  count: 0,
};

function createMethods(state: IState) {
  return {
    reset() {
      return initialState;
    },
    increment() {
      return { ...state, count: state.count + 1 };
    },
    decrement() {
      return { ...state, count: state.count - 1 };
    },
  };
}

function Base() {
  const [state, methods] = useMethods(createMethods, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <Button type="primary" onClick={methods.increment}>
        +
      </Button>
      <Button type="primary" onClick={methods.decrement}>
        -
      </Button>
      <Button type="primary" onClick={methods.reset}>
        reset
      </Button>
    </>
  );
}

export default Base;

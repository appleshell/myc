import { useMemo, useReducer, Reducer } from 'react';

type Action = {
  type: string;
  payload?: any;
};

const useMethods = (createMethods: any, initialState: any) => {
  const reducer = useMemo(
    () => (reducerState: any, action: Action) => {
      return createMethods(reducerState)[action.type](...action.payload);
    },
    [createMethods],
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const wrappedMethods = useMemo(() => {
    const actionTypes = Object.keys(createMethods(initialState));
    return actionTypes.reduce((acc, type) => {
      acc[type] = (...payload: any[]) => dispatch({ type, payload });
      return acc;
    }, {} as any);
  }, [createMethods, initialState]);

  return [state, wrappedMethods];
};

export default useMethods;

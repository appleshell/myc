import { useState, useReducer, Reducer } from 'react';

// const useToggle = (val?: boolean) => {
//   const [state, setState] = useState<boolean>(val ?? true)
//   const toggle = (bol?: boolean) => {
//     if (typeof bol === 'boolean') {
//       setState(bol)
//       return
//     }
//     setState(!state)

//   }
//   return [state, toggle]
// }

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

const useToggle = (
  initialValue: boolean,
): [boolean, (nextValue: boolean) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;

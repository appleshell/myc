import { useState } from 'react';

const useForceUpdate = () => {
  const [, setValue] = useState<number>(0); // integer state
  return () => setValue((value) => value + 1);
};

export default useForceUpdate;

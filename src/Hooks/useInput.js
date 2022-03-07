import { useCallback, useState } from 'react';

export default (init = null) => {
  const [value, setValue] = useState(init);
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return [value, onChange, setValue];
};

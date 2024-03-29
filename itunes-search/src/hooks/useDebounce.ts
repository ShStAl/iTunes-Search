import { useEffect, useState } from 'react'

export default function useDebounce(value: string): string {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

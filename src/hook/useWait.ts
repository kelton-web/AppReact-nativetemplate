import { useState, useEffect } from 'react';

const useWait = (seconds: number): boolean => {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => setIsWaiting(false), seconds * 1000);

    // Cleanup
    return () => clearTimeout(timerId);
  }, [seconds]);

  return isWaiting;
};

export default useWait;

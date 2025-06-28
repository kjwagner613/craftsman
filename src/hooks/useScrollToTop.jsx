import { useEffect } from 'react';

const useScrollToTop = (trigger = true) => {
  useEffect(() => {
    if (trigger) {
      window.scrollTo(0, 0);
    }
  }, [trigger]);
};

export default useScrollToTop;
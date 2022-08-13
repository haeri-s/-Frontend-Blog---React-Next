import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ScrollReset() {
  // const location = useLocation();
  const router = useRouter()
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [router.pathname, router.query]);

  return null;
}

export default ScrollReset;

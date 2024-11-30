import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Store scroll position before navigation
    const scrollPositions = new Map<string, number>();
    scrollPositions.set(pathname, window.scrollY);

    // Restore scroll position
    const savedPosition = scrollPositions.get(pathname) || 0;
    window.scrollTo(0, savedPosition);

    // Scroll to top for new pages
    if (!scrollPositions.has(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
}

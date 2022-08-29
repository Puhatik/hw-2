import { useEffect } from 'react';

import { useLocation } from 'react-router';

type ScrollProps = {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<ScrollProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;

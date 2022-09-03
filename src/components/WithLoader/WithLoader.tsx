import React from 'react';

import Loader from '../Loader/Loader';

type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  children: React.ReactNode;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ loading, children }) => {
  return (
    <div>
      {loading && <Loader />}
      {children}
    </div>
  );
};

export default WithLoader;

import { FC, Suspense } from 'react';

import { AppLoader } from 'widgets/AppLoader';

const SuspenseProvider: FC = (props) => {
  const { children } = props;

  return (
    <Suspense fallback={<AppLoader />}>
      {children}
    </Suspense>
  );
};

export default SuspenseProvider;

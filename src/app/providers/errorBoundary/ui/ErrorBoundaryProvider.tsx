import { FC } from 'react';

import { ErrorBoundary } from 'shared/ui';

import { RootErrorScreen } from 'widgets/RootErrorScreen';

const ErrorBoundaryProvider: FC = (props) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={<RootErrorScreen />}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;

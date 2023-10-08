import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: Element,
}

const Portal: FC<PortalProps> = (props) => {
  const { element, children } = props;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!element) return <>{children}</>;

  return createPortal(children, element);
};

export default Portal;

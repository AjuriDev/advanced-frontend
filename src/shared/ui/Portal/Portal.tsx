import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element: Element,
}

const Portal: FC<PortalProps> = (props) => {
  const { element, children } = props;

  return createPortal(children, element);
};

export default Portal;

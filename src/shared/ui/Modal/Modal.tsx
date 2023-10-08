import {
  FC, useState, useCallback, useRef, useEffect,
} from 'react';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { useClickOutsideAlerter, useKeyDownAlerter } from 'shared/lib/hooks';
import { AnimationDurations } from 'shared/ui/lib/constants';

import { Portal } from 'shared/ui';

import cls from './Modal.module.scss';

interface ModalProps extends ClassName {
  opened?: boolean;
  onClose?: () => void;
}

const modalContainerEl = document.querySelector('#modal');

const Modal: FC<ModalProps> = (props) => {
  const {
    className, opened, onClose, children,
  } = props;

  const [closing, setClosing] = useState<boolean>(false);

  const closingTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    if (onClose && !closing) {
      setClosing(true);
      closingTimerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, AnimationDurations.NORMAL);
    }
  }, [onClose, closing]);

  const ref = useClickOutsideAlerter({
    onOutsideClick: handleClose,
    turnedOn: opened,
  });

  useKeyDownAlerter({
    keyCode: 'Escape',
    onKeyDown: handleClose,
    turnedOn: opened && !closing,
  });

  useEffect(() => () => {
    clearTimeout(closingTimerRef.current);
  }, [opened]);

  return (
    <Portal element={modalContainerEl}>
      <div className={cn(
        cls.root,
        { [cls._opened]: opened, [cls._closing]: closing },
        [className],
      )}
      >
        <div className={cls.overlay}>
          <div ref={ref} className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

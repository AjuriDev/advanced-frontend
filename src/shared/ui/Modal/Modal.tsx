import {
  FC, Suspense, useCallback, useEffect, useState,
} from 'react';

import { Spinner, Text } from 'shared/ui';
import { ClassName, TextType } from '../../types';
import { joinClassNames as cn } from '../../lib/utils';
import { useClickOutsideAlerter, useKeyDownAlerter } from '../../lib/hooks';
import {
  AnimationDurations,
  ViewStates,
} from '../../lib/constants/ui';

import Portal from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps extends ClassName {
  opened?: boolean;
  title?: TextType;
  onClose?: () => void;
}

const modalContainerEl = document.querySelector('#modal');

const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    opened,
    title,
    children,
    onClose,
  } = props;

  const [
    viewState,
    setViewState,
  ] = useState<ViewStates>(ViewStates.CLOSED);
  const isOpened = viewState === ViewStates.OPENED;
  const isClosed = viewState === ViewStates.CLOSED;
  const isOpening = viewState === ViewStates.OPENING;
  const isClosing = viewState === ViewStates.CLOSING;
  // const viewStateChangeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    if (!isClosing) onClose?.();
  }, [onClose, isClosing]);

  const ref = useClickOutsideAlerter({
    onOutsideClick: handleClose,
    turnedOn: opened,
  });

  useKeyDownAlerter({
    keyCode: 'Escape',
    onKeyDown: handleClose,
    turnedOn: opened && !isClosing,
  });

  useEffect(() => {
    const transitionState = opened
      ? (isClosed || isClosing) && ViewStates.OPENING
      : (isOpened || isOpening) && ViewStates.CLOSING;
    const newState = opened
      ? (isClosed || isClosing) && ViewStates.OPENED
      : (isOpened || isOpening) && ViewStates.CLOSED;

    if (transitionState) setViewState(transitionState);
    const timer: NodeJS.Timer | null = newState
      ? setTimeout(() => {
        setViewState(newState);
      }, AnimationDurations.NORMAL)
      : null;
    return () => {
      if (!opened && isClosed && timer) {
        clearTimeout(timer);
      }
    };
  }, [opened, isOpened, isOpening, isClosing, isClosed]);

  const modal = (
    <div className={cn(
      cls.root,
      {
        [cls._closed]: isClosed,
        [cls._opened]: isOpened,
        [cls._opening]: isOpening,
        [cls._closing]: isClosing,
      },
      [className],
    )}
    >
      <div className={cls.overlay}>
        <div ref={ref} className={cls.content}>
          {title && <Text className={cls.title} text={title} Tag="h3" />}
          {isClosed ? null : (
            <Suspense fallback={<Spinner />}>
              {children}
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );

  return modalContainerEl ? (
    <Portal element={modalContainerEl}>
      {modal}
    </Portal>
  ) : modal;
};

export default Modal;

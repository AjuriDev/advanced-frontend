import {
  useEffect, useCallback, useRef,
} from 'react';

interface ClickOutsideAlerterParams {
  onOutsideClick: () => void;
  turnedOn?: boolean;
}

function useClickOutsideAlerter<T extends HTMLElement = HTMLDivElement>(
  params: ClickOutsideAlerterParams,
) {
  const { onOutsideClick, turnedOn = true } = params;
  const ref = useRef<T>(null);

  const handleOutsideClick = useCallback(
    (e) => {
      if (!ref?.current?.contains(e.target)) {
        onOutsideClick();
      }
    },
    [onOutsideClick],
  );

  useEffect(() => {
    if (turnedOn) {
      document.addEventListener('mousedown', handleOutsideClick, true);
    }
    return () => {
      if (turnedOn) {
        document.removeEventListener('mousedown', handleOutsideClick, true);
      }
    };
  }, [handleOutsideClick, turnedOn]);

  return ref;
}

export default useClickOutsideAlerter;

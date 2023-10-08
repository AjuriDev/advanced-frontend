import { useCallback, useEffect } from 'react';

interface KeyDownAlerterParams {
  keyCode: string,
  onKeyDown: () => void;
  turnedOn?: boolean;
}

function useKeydownAlerter(params: KeyDownAlerterParams) {
  const { keyCode, onKeyDown, turnedOn = true } = params;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === keyCode) onKeyDown();
  }, [onKeyDown, keyCode]);

  useEffect(() => {
    if (turnedOn) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (turnedOn) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [handleKeyDown, turnedOn]);
}

export default useKeydownAlerter;

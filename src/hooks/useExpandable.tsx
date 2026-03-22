// hooks/useExpandable.ts
import { useState, useCallback, useEffect } from 'react';

interface UseExpandableReturn {
  isExpanded: boolean;
  isAnimating: boolean;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

export const useExpandable = (): UseExpandableReturn => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const expand = useCallback(() => {
    setIsExpanded(true);
    setIsAnimating(true);
  }, []);

  const collapse = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => setIsExpanded(false), 300);
  }, []);

  const toggle = useCallback(() => {
    if (isExpanded) {
      collapse();
    } else {
      expand();
    }
  }, [isExpanded, expand, collapse]);

  // Handle body scroll lock
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return {
    isExpanded,
    isAnimating,
    expand,
    collapse,
    toggle
  };
};
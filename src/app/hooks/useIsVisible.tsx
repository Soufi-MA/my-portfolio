import { useEffect, useRef } from "react";

const useIsVisible = <T extends HTMLElement>(hash: string) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current; // Store the current value of ref

    const handleHashChange = (visible: boolean) => {
      const currentHash = window.location.hash;
      if (visible) {
        if (currentHash !== `#${hash}`) {
          window.history.pushState(null, "", `#${hash}`);
        }
      } else {
        if (currentHash === `#${hash}`) {
          window.history.pushState(null, "", " ");
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        handleHashChange(isElementVisible);
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hash]);

  return ref;
};

export default useIsVisible;

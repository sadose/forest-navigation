import { useEffect, useRef } from "react";

function useDidUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) effect();
    else didMountRef.current = true;
  }, deps);
}

export default useDidUpdateEffect;

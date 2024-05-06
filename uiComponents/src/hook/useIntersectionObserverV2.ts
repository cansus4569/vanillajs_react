import { RefObject, useEffect, useRef, useState } from 'react';

type Elem = Element | null;

const DefaultOption: IntersectionObserverInit = { threshold: 0 };

const useIntersectionObserver = (
  elemRef: RefObject<Elem | Elem[]>,
  options: IntersectionObserverInit = DefaultOption
) => {
  const observerRef = useRef<IntersectionObserver>();
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const node = elemRef.current;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      setEntries((prev) => {
        // entries: 새로 변경된 내용
        // prev: 기존 entries
        // 위 둘을 조합해서 newEntries를 만들어야 함. (isIntersection: true인 애들만)
        // 중복 제거 / 최신정보 업데이트 => Map을 사용해보겠다.
        return Array.from(
          new Map(prev.concat(entries).map((e) => [e.target, e])).values()
        ).filter((e) => e.isIntersecting);
      });
    };
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;
    if (Array.isArray(node)) node.forEach((n) => n && observer.observe(n));
    else observer.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [elemRef, options]);

  return { entries, observerRef };
};

export default useIntersectionObserver;

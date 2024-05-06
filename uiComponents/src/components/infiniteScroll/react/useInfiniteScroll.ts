import { useEffect, useRef } from 'react';
import useInfiniteFetcher from './useInfiniteFetcher';
import useIntersectionObserver from '@/hook/useIntersectionObserver';

const ioOptions = { threshold: 0.5 };

const useInfiniteScroll = () => {
  const { data, state, fetchNextPage } = useInfiniteFetcher();
  const moreRef = useRef<HTMLDivElement>(null);

  const {
    entries: [entry],
  } = useIntersectionObserver(moreRef, ioOptions);

  const isIntersecting = entry?.isIntersecting;

  useEffect(() => {
    if (isIntersecting) fetchNextPage();
  }, [isIntersecting]);

  return { data, state, moreRef };
};

export default useInfiniteScroll;

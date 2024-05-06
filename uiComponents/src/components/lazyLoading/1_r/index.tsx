import { useEffect, useRef, useState } from 'react';
import cx from '../cx';
import data from '../data';
import useIntersectionObserver from '@/hook/useIntersectionObserver';

const isOptions: IntersectionObserverInit = {
  threshold: 0, // 1: 전부 보이는 상태, 0: 화면에 조금이라도 걸치면  True가 됨
};

export const LazyImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { entries, observerRef } = useIntersectionObserver(imgRef, isOptions);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    // img 태그에서 loading 속성을 지원하는 브라우저인 경우
    if ('loading' in HTMLImageElement.prototype) {
      imgRef.current!.setAttribute('src', src);
      imgRef.current!.setAttribute('loading', 'lazy');
      observerRef.current?.disconnect();
      return;
    }

    // img 태그에서 loading 속성을 지원하지 않는 브라우저인 경우, IntersectionObserver를 사용
    const isVisible = entries[0]?.isIntersecting;
    if (isVisible) {
      // imgRef.current!.addEventListener('load', onLoad, { once: true });
      imgRef.current!.setAttribute('src', src);
      observerRef.current?.disconnect();
    }
  }, [src, entries]);

  return (
    <img
      ref={imgRef}
      className={cx({ lazy: !loaded })}
      width={width}
      height={height}
      onLoad={onLoad}
      alt=""
      // loading="lazy" // 브라우저에서 빌트인으로 제공하는 기능
      // src={src}
    />
  );
};

/**
 * 상위단에서 loading="lazy"를 사용하면, IntersectionObserver를 사용하지 않아도 된다.
 */
const lazyEnable = 'loading' in HTMLImageElement.prototype;
const BuiltinImage = (props: any) => (
  <img {...props} className={cx('lazy')} loading="lazy" />
);
const Image = lazyEnable ? BuiltinImage : LazyImage;

const LazyLoad1 = () => {
  return (
    <>
      <h2>
        지연로딩<sub>#1. React</sub>
      </h2>
      {data.map((url, index) => (
        <LazyImage src={url} key={index} width={600} height={320} />
        // <Image src={url} key={index} width={600} height={320} />
      ))}
    </>
  );
};

export default LazyLoad1;

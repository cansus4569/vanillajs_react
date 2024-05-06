# 7일차 강의 내용 정리

## LazyLoading

### IntersectionObserver 를 활용

- threshold 값을 조정하여 불러올 시점 정함

```tsx
const isOption: IntersectionObserverInit = {
  threshold: 0,
};

const observerRef = useRef<IntersectionObserver>();
const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

observerRef.current = new IntersectionObserver(setEntries, isOption);
```

- isIntersecting 값이 true/false 를 활용하여 이미지를 show 한다.

```
const isVisible = entries[0]?.isIntersecting;
if (isVisible) {
    imgRef.current!.setAttribute('src', src);
    observerRef.current?.disconnect();
}
```

## useImperativeHandle Hook ?

- 참조 : https://velog.io/@young_mason/useImperativeHandle

```
`useImperativeHandle` 은 ref를 사용할 때 부모 컴포넌트에 노출되는 인스턴스 값을 사용자화합니다.
대부분의 경우 ref를 사용한 명령형 코드는 피해야 합니다.
`useImperativeHandle`는 `forwardRef`와 더불어 사용하세요.
```

```js
useImperativeHandle(ref, createHandle, [deps]);
```

- `useImperativeHandle` 훅은 부모 컴포넌트에서 자식 컴포넌트의 State를 관리해야할 경우 사용할 수 있는 훅입니다.
- 즉, 자식의 상태변경을 부모가 하거나, 자식 컴포넌트의 State 핸들러를 부모에서 호출하는 경우 사용할 수 있다.

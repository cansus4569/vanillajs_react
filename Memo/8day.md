# 8일차 강의 내용 정리

## [ HTML ]

### insertAdjacentHTML

- Element의 인터페이스 메서드
- 지정된 텍스트를 HTML 혹은 XML로 파싱하고 결과 노드들을 지정된 위치의 DOM 트리에 삽입한다.

```js
Element.insertAdjacentHTML(position, text);
/**
 * < position >
 * - beforebegin
 * - afterbegin
 * - beforeend
 * - afterend
 */
```

- 참조 : https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
- insertAdjacentElement [(2장 참조)](2day.md)

## [ JS ]

### Array.sort()

- 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
- 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.

```js
// 구문
arr.sort([compareFunction]);
```

- `compareFunction`
  - 정렬 순서를 정의하는 함수
  - 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니코드 코드 포인트 값에 따라 정렬된다.
- `compareFunction`이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬된다.
  - `compareFunction(a, b)`이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저온다.
  - `compareFunction(a, b)`이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 다른 요소에 대해 정렬한다.
  - `compareFunction(a, b)`이 0보다 큰 경우, b를 a보다 낮은 인덱스로 정렬한다.

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

## [ React ]

### useCallback Hook ?

- `useCallback()`은 함수를 메모이제이션(memoization)하기 위해서 사용되는 hook 함수이다.
- 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해 놓고 재사용할 수 있게 해준다.

```js
const memoizedCallback = useCallback(함수, 배열);
```

## [ CSS ]

### backdrop-filter

- 배경 이미지에 블러처리를 줄 수 있다.

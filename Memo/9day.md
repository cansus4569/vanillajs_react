# 9일차 강의 내용 정리

## [HTML]

### scrollIntoView

- 참조 : https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
- Element의 메서드이다.
- `scrollIntoView()`가 호출된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤한다.

```js
element.scrollIntoView();
element.scrollIntoView(alignToTop); // Boolean Parameter
// true 일 경우, 요소의 상단은 스크롤 가능한 조상 요소의 보이는 영역 상단에 정렬된다. (기본값)
//      - scrollIntoViewOptions: {block: 'start', inline: 'nearest'}
// false 일 경우, 요소의 하단은 스크롤 가능한 조상 요소의 보이는 영역 하단에 정렬된다.
//      - scrollIntoViewOptions: {block: 'end', inline: 'nearest'}
element.scrollIntoView(scrollIntoViewOptions); // Object Parameter
```

- `scrollIntoViewOptions` 는 다음 속성을 포함하는 객체이다.
  - behavior
    - smooth : 스크롤이 부드럽게 움직인다.
    - instant : 스크롤이 단번에 즉시 적용된다.
    - auto : 스크롤 동작은 `scroll-behavior`의 계산된 값에 의해 결정된다.
  - block
    - start (기본값)
    - center
    - end
    - nearest
  - inline
    - start
    - center
    - end
    - nearest (기본값)

## [JS]

### Map

- Map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.
- Map 객체는 객체와 유사 하지만 다음과 같은 차이가 있다.
  - Iterable 가능
  - map.size
- 더 자세한 내용은 Deep Dive 스터디 했던 내용 [참조](https://github.com/cansus4569/js-es6-study/tree/main/33.%20Set%20And%20Map)

### Arr.findIndex

```js
findIndex(callbackFn);
findIndex(callbackFn, thisArg);
```

- 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- `findIndex()` 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다.
- 만족하는 요소가 없으면 -1을 반환한다.

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

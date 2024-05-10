# 9일차 강의 내용 정리

## [JS]

### window.scrollTo

- 참조 : https://developer.mozilla.org/ko/docs/Web/API/Window/scrollTo
- 문서의 지정된 위치로 스크롤합니다.

```js
// 구문
window.scrollTo(x_좌표, y_좌표);
// 예시
window.scrollTo(0, 1000);
```

- `x_좌표` : 문서의 왼쪽 상단부터 시작하는 픽셀 단위의 가로축
- `y_좌표` : 문서의 왼쪽 상단부터 시작하는 픽셀 단위의 세로축

- `options` 를 활용해서도 사용 가능하다.
  - `top` : 창 또는 요소를 스크롤할 Y축을 따라 픽셀 수를 지정한다.
  - `left` : 창 또는 요소를 스크롤할 X축을 따라 픽셀 수를 지정한다.
  - `behavior` : 스크롤을 즉시 적용할지 아니면 부드러운 애니메이션을 적용할지 결정한다.
    - `smooth` : 스크롤이 부드럽게 움직인다.
    - `instant` : 스크롤이 단번에 즉시 적용된다.
    - `auto` : 스크롤 동작은 계산된 scroll-behavior 값에 의해 결정된다.

### Event.composedPath()

- 참조 : https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
- 이벤트가 발생된 노드에서 최상위 노드(window) 까지의 상하관계를 배열로 리턴해준다.

- 예시 : 아래와 같은 div 구조에서 이벤트를 발생시켜 composedPath() 출력시

```html
<html>
  <body>
    <div>
      <button id="btn">버튼</button>
    </div>
  </body>
</html>

<script>
  function handleClick = (e) => {
      console.log(e.composedPath()); // [button#btn, div, body, html, document, Window]
  }
  const btn = document.getElementById('btn');
  btn.addEventListener('click', handleClick);
</script>
```

### Array.find

- 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- `find()` 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환한다.
- 테스트 함수를 만족하는 값이 없으면 `undefined` 가 반환된다.

```js
// 구문
find(callbackFn [, thisArg])

// 예시
const arr = [5, 12, 8, 130, 44];
const found = arr.find((item) => element > 10);
console.log(found); // 12
```

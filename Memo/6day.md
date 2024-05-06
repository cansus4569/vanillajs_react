# 6일차 강의 내용 정리

## 유레카!!

- useRef 사용 용도는 여러가지가 있었지만, 이번 강의를 통해 그 중 한가지를 명확하게 이해할수 있었다.

- [2day.md](./2day.md)에서 간단하게 정리한 내용

```
useRef (React-Hook)

- 주요 사용 목적
  - useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않게 할 수 있다.
  - useRef를 통해 DOM 요소를 직접적으로 선택할 수 있다.
```

- 내가 현업에서 element에 접근하기 위해 주로 사용했던 방식

```js
document.getElementById('id'); // id 속성으로 가져옴
document.getElementsByName('name'); // name 속성으로 가져옴
document.querySelector('#id'); // id 속성으로 가져옴
document.querySelector('.className'); // class 속성으로 가져옴
```

- 그렇타면 HTML 태그에 id 속성과 class 속성이 없을 경우, 어떻게 접근할 것인가?
- useRef 를 사용하면 element 에 접근할 수 있다.

```jsx
const test = ({ text }) => {
  const elemRef = useRef(null);

  // elemRef.current 를 사용하여 접근한다.

  return (
    <div>
      <div ref={elemRef}>{text}</div>
    </div>
  );
};
```

## [ HTML & JS ]

### getComputedStyle

- 공식 참조 : https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle
- 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 반환한다.

```js
var style = window.getComputedStyle(element[, pseudoElt]);
```

- 참조 : https://helloinyong.tistory.com/284
- Element.style 과 getComputedStyle의 차이점
- getComputedStyle 은 Read-Only 속성을 가진다.

#### 1. getPropertyValue

- 인수로 지정된 css 속성 값을 포람하는 DOMString을 반환한다.

```js
getPropertyValue(property);

// ex1
var value = element.style.getPropertyValue(property);

// ex2
bar box1_css = getComputedStyle(box1);
box1_x = parseInt(box1_css.getPropertyValue("left")); // string 을 반환하기에 parseInt()로 정수형으로 변환해준다.
```

### IntersectionObserver

- 교차 관찰자 API
- 대상 요소와 상위 요소, 또는 대상 요소와 최상위 문서의 뷰포트가 서로 교차하는 영역이 달라지는 경우 이를 비동기적으로 감지할 수 있는 수단을 제공한다.
- 사용 예제
  - 페이지 스크롤 시 이미지를 Lazy-loading(지연로딩) 할 때
  - Infinite scrolling(무한 스크롤)을 통해 스크롤할 때 새로운 콘텐츠를 불러올 때
  - 광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
  - 사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

### MutationObserver

- DOM의 속성, 텍스트, 자식 노드들에 대한 변경을 감지할 수 있는 API이다.
- 특정 노드 객체를 관찰하고, 변경이 발생했을 때 콜백 함수를 실행한다.

## [ css ]

### white-space: pre-line;

- 요소 내부의 공백 문자(Whitespace)처리와 줄바꿈 규칙을 지정한다.

### transform: rotate(45deg);

- 이미지나 태그를 `이동(translate)`, `회전(rotate)`, `확대축소(scale)`, `비틀기(skew)` 효과를 부여할 수 있다.

### text-overflow: ellipsis;

- `('...')`를 처리하는 방법
- 글자가 지정된 width 를 넘을 경우 생략 부호를 표시하도록 함

### visibility: hidden;

- 지정된 태그의 가시성을 결정한다.
  - 기본값 `inherit` : 부모 요소의 값을 상속
  - `hidden` : 숨김 (자신의 영역은 계속 차지)
  - `visible` : 보임
  - `collapse` : 겹치도록 지정(테이블의 행과 열 요소만 지정할 수 있으며, 그 외 요소의 지정하면 hidden으로 해석)
- `display:none` 과 `visibility:hidden` 의 차이점은 ??
  - `visibility:hidden` 을 사용하면 그 요소가 차지하던 공간은 그대로 유지되지만 화면에는 보이지 않게 된다. 즉, 레이아웃이 그대로 유지된다.
  - `display:none` 을 사용하면 그 요소가 아예 없었던 것 처럼 공간이 유지 되지 않아 레이아웃이 변경된다.

### opacity: 0;

- 요소의 투명도(=불투명도)를 정할 수 있다.
  - 숫자가 클수록 불투명하고, 숫자가 작을 수록 투명하다.
  - 기본값 : 1
  - 상속 : No
  - 애니메이션 : Yes
  - 허용 값
    - 0.0 ~ 1.0
    - 0% ~ 100%

### box-sizing: border-box;

- 참조 URL : https://velog.io/@nalsae/%EB%82%B4%EB%B3%B4%EC%A0%95CSS-%EB%AA%A8%EB%A5%B4%EB%A9%B4-%EA%B3%A4%EB%9E%80%ED%95%9C-box-sizing
- 정리 :
  - 보통 box-sizing을 선언하지 않으면 기본값으로 `content-box` 값이 사용되어진다.
  - `content-box` 값으로 사용하게 되어지면, width 값의 결정은 순수하게 태그(콘텐츠)의 width 와 동일하게 반영되어진다.
  - 반면에 `border-box` 값으로 사용하게되어지면, width 값은 `"콘텐츠 크기 + 좌우 padding 값 + 좌우 border 값"`으로 계산되어진다.

### vertical-align: middle;

- 인라인 레벨 요소와 테이블 셀 요소 내부의 수직 정렬을 지정하는 속성이댜.
- 참조 URL : https://codingeverybody.kr/css-vertical-align-%EC%86%8D%EC%84%B1-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C/

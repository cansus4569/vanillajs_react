# 4일차 강의 내용 정리

키워드만 남겨놓고 나중에 작성할 예정

## Keyword List

### [typescript]

#### 1. Partial

- Typescript 에서 제공하는 타입 유틸리티 이다.
- 주어진 타입의 모든 프로퍼티를 optional 하게 만들어주는 기능
- 자바스크립트의 옵셔널 체이닝 `?.` 과 동일한 기능을 제공하는 거라고 생각하면 된다.
- 참조 : https://velog.io/@ou9999/TypeScript-Partial%EC%9D%B4%EB%9E%80

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

type MyInfo = Partial<Person>;

let park: MyInfo = {
  name: 'Park',
};
// park 변수는 name 프로퍼티만 가지고 있어도 에러가 발생하지 않고 올바른 타입이다.
```

#### 2, Record

- TypeScript에서 제공하는 타입 유틸리티 이다.
- 참조 : https://developer-talk.tistory.com/296

```
Record<Key, Type>
키가 Key이고 값은 Type인 객체 타입이다.
```

- 보통 `인덱스 시그니처(Index Signature)`와 동일한 역할을 하는데, 차이점이 있다고 한다.

```ts
// 인덱스 시그니처를 사용하여 객체 생성 방식
// 인덱스 시그니처는 대괄호로 객체를 접근하는 방법이다.
type humanInfo = {
  [name: string]: number;
};

// Record Type 사용하여 객체 생성 방식
type humanInfo = Record<string, number>;

let human: humanInfo = {
  홍길동: 20,
  둘리: 30,
  마이콜: 40,
};
```

- 시그니처 인덱스의 단점
  - 문자열 리터럴을 Key로 사용하는 경우 오류가 발생함
  - Record Type를 활용하여 이러한 문제 해결 가능!

```ts
// string이 아닌 문자열 리터롤로 정의함
// ts(1337) Error 발생
// An index signature parameter type cannot be a literal type or generic type.
// Consider using a mapped object type instead.
type humanInfo = {
  [name: '홍길동' | '둘리' | '마이콜']: number;
};

// Record Type은 Key로 문자열 리터럴을 허용한다.
type names = '홍길동' | '둘리' | '마이콜';
type humanInfo = Record<names, number>;
let human: humanInfo = {
  홍길동: 20,
  둘리: 30,
  마이콜: 40,
};
```

- 번외 : `keyof` 을 활용한 Record Type 예제

```ts
type humanType = {
  name: string;
  age: number;
  address: string;
};

type humanRecordType = Record<keyof humanType, string>;

let human: humanRecordType = {
  name: '또치',
  age: '20',
  address: '서울',
};
```

#### 2, Pick

- TypeScript에서 제공하는 타입 유틸리티 이다.

```
Pick<Type, keys>
전달받은 Type에서 string literal 혹은 union of string으로 받은 keys를 뽑아서 타입을 생성한다.
```

- 참조 :https://80000coding.oopy.io/edb8d09e-7ef9-4de2-9cf3-3b2d61d0c3e7

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;
/**
 * interface TodoPreview {
 *      title: string;
 *      completed: boolean;
 * }
 */
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

### [HTML]

#### 1. document.scrollingElement

- 공식 참조 :https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement

- 문서를 스크롤하는 Element에 대한 읽기 전용 참조를 반환한다.

  - 테스트 삼아 개발자도구에서 확인한 결과 html 이 반환되었다.

- 참조 : https://ujeon.medium.com/dom-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%B4-%EB%81%9D%EB%82%AC%EB%8A%94%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-feat-scrollingelement-58f5a2c68f0a

- scrollingElement에는 `scrollHeight`, `scrollTop`, `clientHeight` 속성이 존재한다.
  - scrollHeight : 요소의 스크롤 가능한 높이
  - scrollTop : 요소 최상단에서 얼마나 스크롤 했는지의 픽셀 값
  - clientHeight : 사용자가 한 번에 볼 수 있는 컨텐츠의 높이
- `scrollingElement`를 활용한 스크롤이 끝났는지 확인하는 방법

```js
const element = document.scrollingElement;
const endFlag =
  element.scrollHeight - element.scrollTop === element.clientHeight;
```

#### 2. Element.getBoundingClientRect()

- 공식 참조 : https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
- Element.getBoundingClientRect() 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 [DOMRect](https://developer.mozilla.org/ko/docs/Web/API/DOMRect) 객체를 반환한다.

```js
const domRect = element.getBoundingClientRect();
```

- 반환 값은 padding과 border-width를 포함해 전체 엘리먼트가 들어 있는 가장 작은 사각형인 DomRect 객체이다.
- `left`, `top`, `right`, `bottom`, `x`, `y`, `width`, `height` 프로퍼티는 전반적인 사각형의 위치와 크기를 픽셀 단위로 나타낸다.

#### 3. Event.stopPropagation

- 공식 참조 : https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation
- Event 인터페이스의 `stopPropagation()` 메서드는 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지한다.
- 전파를 방지해도 이벤트의 기본 동작은 실행되므로, `stopPropagation()` 이 링크나 버튼의 클릭을 막는 것은 아니다.
- 이러한 기본 동작을 방지하려면 `preventDefault()` 메서드를 사용해라

- 예시 참조 : https://pa-pico.tistory.com/20

```html
<!-- html -->
<div class="first-cover">
  <ul class="second-cover">
    <li class="third-cover">
      <div class="last-el">event</div>
    </li>
  </ul>
</div>

<!-- Script -->
<script>
  $('.last-el').click(function (e) {
    e.stopPropagation(); // 이벤트 상위 엘리먼트에게 전파되는 것을 방지한다.
    alert('last-el');
  });
  $('.third-cover').click(function () {
    alert('third-cover');
  });
  $('.second-cover').click(function () {
    alert('second-cover');
  });
  $('.first-cover').click(function () {
    alert('first-cover');
  });
</script>
```

### [JS]

#### 1. Array.every

- 해당 메서드는 (내기준) 생각보다 잘 안써서 다시 한번 정리하고자 한다.
- 대표적으로 `Array.every()`와 Array.some()`으로 크게 개념이 비슷하여 소개되어진다.
  - `Array.every()` : 배열의 모든 요소가 조건을 충족하는지 확인(AND)
  - `Array.some()` : 배열의 1개 요소라도 특정 조건을 충족하는지 확인(OR)

```js
const array = [1, 2, 3, 4];
let result = array.some((num) => num > 2); // true
result = array.every((num) => num > 2); // false
```

#### 2. ResizeObserver

- 공식 참조 : https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
- 참조 : https://mong-blog.tistory.com/entry/JS-%ED%81%AC%EA%B8%B0-%EB%B3%80%ED%99%94%EB%A5%BC-%EA%B0%90%EC%A7%80%ED%95%98%EB%8A%94-%EB%91%90-%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95resize-ResizeObserver

- `ResizeObserver` 는 `특정 요소`의 크기 변화를 감지를 제공해주는 API라고 보면 된다.
- `resize` 이벤트의 경우는 `브라우저`의 크기가 변경될 때 발생된다.
  - 브라우저 크기 변화에 따른 DOM의 변경 크기를 구하려면 `getBoundingClientRect()`, `getComputedStyle()`를 사용해줘야 한다.

```html
<h3>textarea의 크기를 변경해보자</h3>
<textarea></textarea>

<br />
<span class="result"></span>

<script>
  const textArea = document.querySelector('textarea');
  const result = document.querySelector('.result');

  // 1. ResizeObserver 객체 만들기
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      result.innerText = `너비: ${width} 높이: ${height}`;
    }
  });

  // 2. 감지할 요소 추가하기
  observer.observe(textArea);
</script>
```

### [React]

#### 1. useContext Hook 간단한 개념과 생각...

- React 내장 Hook 이다.

  - 즉, 외부 라이브러리 필요 X

- Context API는 상태 관리 도구가 아니다.
- 상태 관리 자체는 직접 관리해야한다.

- 그래도,, 전역 상태변수가 많아지고 효율적으로 관리하기 위해서는 Redux 관련 외부 라이브러리를 사용하는것이 좋은거 같다...

  - Recoil, Mobx, Zustand, Jotai 등...

- 참조 : https://hong-jh.tistory.com/entry/Context-API%EB%8A%94-%EC%99%9C-%EC%93%B0%EA%B3%A0-%EA%B7%B8%EB%A0%87%EB%8B%A4%EB%A9%B4-Redux%EB%8A%94-%ED%95%84%EC%9A%94%EC%97%86%EC%9D%84%EA%B9%8C
- 참조 : https://velog.io/@hoeun0723/useContext-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-Context-Api-ReduxRecoil%EA%B3%BC%EC%9D%98-%EB%B9%84%EA%B5%90

### [SCSS / CSS]

- 아니요... CSS는 진짜 너무 외계어 같아요... ㅜ\_ㅜ
- 내가 볼때엔,,, 찾아서 공부하는것 보다는, 실무에서 직접 겪으면서 배워나가는 것이 좋타고 생각된다..
- CSS 문법은 구글링에 어떻게 검색해서 찾아봐야할지도 난감하다...

```css
content: "+" or "-"

&.current

&::before

&::marker

&::after

-.tab

~ .description

white-space

text-overflow

flex-wrap

box-sizing

@for $i from 1 through 4 {
  $: nth-child(#{$i});
}

position: relative / absolute;
```

#### display: inline-block

- `inline`, `block`, `inline-block`
- `inline` : 지정된 엘리먼트는 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치됩니다.
  - `width`와 `height` 속성을 지정해도 무시된다는 것입니다.
  - `margin`과 `padding` 속성은 좌우 간격만 반영이 되고, 상하 간격은 반영이 되지 않습니다.
- `block` : 지정된 엘리먼트는 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지합니다.
  - `width`, `height`, `margin`, `padding` 속성이 모두 반영이 됩니다.
- `inline-block` : 기본적으로 `inline` 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치되지만, `block` 엘리먼트처럼 width와 height 속성 지정 및 margin과 padding 속성의 상하 간격 지정이 가능합니다.
  - 다시 말해서, 내부적으로는 `block` 엘리먼트의 규칙을 따르면서 외부적으로 `inline` 엘리먼트의 규칙을 따르게 되는 것이지요.

#### background-color: transparent

- 배경색을 없애고 투명하게 만들고 싶다면 `transparent`를 사용해주면 된다.

# 3일차 강의 내용 정리

## className vs classList

- 강의 내용중에 클래스를 추가하는 방식으로 `classList` 를 사용한다.
- 현업에서 주로 `className` 을 사용하곤 했는데, 그렇타면 `classList`와의 차이점은 무엇인가...(?) 궁금해서 정리 해보고자 한다.
- 참조 URL
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/className
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  - https://velog.io/@hye_rin/JavaScript-className%EA%B3%BC-classList

### < className >

- `className`은 클래스명을 추가시에 기존에 가지고 있는 class명들을 전부 지우고 추가한다.
- `className`은 class 전체를 관리할 때 또는 클래스 하나만 조작하고 싶을 때 사용하면 용이하다.

```html
<h1 class="apple banana>안녕하세요.</h1>

<script>
    const h1 = document.querySelector("apple");

    console.log(h1.className); // apple banana

    // h1이 가진 모든 class를 삭제하고 graphe 하나만을 추가한다.
    h1.className = "grape"; // <h1 class="grape">안녕하세요.</h1>

    // h1이 가진 모든 class 삭제
    h1.className = ""; // <h1>안녕하세요.</h1>
</script>
```

### < classList >

- `classList`는 노드의 클래스를 다룰 수 있도록 제공되는 기능이다.
- `classList`는 읽기 전용 프로퍼티이다.
- 다양한 메서드를 제공해준다.
  - contain
  - add
  - remove
  - toggle
  - replace
  - item

```js
// class 이름 읽기
element.classList;

// class item 하니씩 읽기 (인덱스)
element.classList.item(index);

// class 추가 (기존에 있다면 중복 추가 X)
element.classList.add('이름');
// 멀티 추가 가능
element.classList.add('a', 'b', 'c');
const cls = ['apple', 'banana'];
element.classList.add(...cls);

// class 제거
element.classList.remove('이름');
// 멀티 제거 가능
element.classList.remove('a', 'b', 'c');
element.classList.remove(...cls);

// 존재하면 true, 존재하지 않으면 false 반환
element.classList.contains('이름');

// 존재하면 class 제거, 존재하지 않으면 class 추가
element.classList.toggle('이름');
// 두번째 파라미터는 조건식(boolean) 가능
element.classList.toggle('이름', i < 20);

// class 교체
element.classList.replace('기존', '대체');
```

## element.dataset 속성

- HTML 태그의 고유한 커스텀 변수라고 생각하면 쉽다.
- 속성의 명칭은 `data-` 키워드로 사용한다.
- 데이터셋은 읽고, 쓰기가 가능하다.
- 다양한 곳에서 사용이 가능하다.
- 참조 URL : https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-HTML-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%85%8Bdata-%EC%86%8D%EC%84%B1

## `<Label>` htmlFor property ?

- 흔히 HTML 에서 Label 태그에 대한 속성은 `for` 를 사용한다.
- 주로 Input 태그의 id와 연결고리를 맺어주는 역할을 한다.
- 이번 강의에서는 htmlFor은 처음봐서 알아보았다.
- MDN 공식 문서에서는 다음과 같이 명시되어 있다.

```
Note: To programmatically set the for attribute, use htmlFor.
```

- 구글을 통해서 찾아본 결과 React 에서는 Label 태그에 `for`속성을 사용하면 에러가 발생하여 `htmlFor`을 써야 된다고 한다.

## Event : "beforematch"

- 일부 브라우저에서는 지원하지 않음
  - FireFox / Safari
  - Chrome 102 이상 / Opera 88 이상
- 브라우저 호환성을 위해서는 사용하기 어려움이 있음
- hidden 속성값이 "until-found" 로 설정되어 있으면 => `hidden="until-found"`
- 숨겨진 영역의 콘텐츠를 검색하고 일치하는 내용이 있으면 beforematch 이벤트를 addEventListener()로 받아 표시할 수 있다.

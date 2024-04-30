# 2일차 강의 내용 정리

## 1일차에 궁금했던 디렉터리 명칭이 [...item] ...?

- 해당내용은 [types/app/[...item]/page.ts](../uiComponents/.next/types/app/[...item]/page.ts) 을 확인하고 나서야 이해가 되었다.

```ts
// Check the prop type of the entry function
checkFields<Diff<PageProps, FirstArg<TEntry['default']>, 'default'>>();

// Check the arguments and return type of the generateStaticParams function
if ('generateStaticParams' in entry) {
  checkFields<
    Diff<
      { params: PageParams },
      FirstArg<MaybeField<TEntry, 'generateStaticParams'>>,
      'generateStaticParams'
    >
  >();
  checkFields<
    Diff<
      {
        __tag__: 'generateStaticParams';
        __return_type__: any[] | Promise<any[]>;
      },
      {
        __tag__: 'generateStaticParams';
        __return_type__: ReturnType<MaybeField<TEntry, 'generateStaticParams'>>;
      }
    >
  >();
}

type PageParams = any;
export interface PageProps {
  params?: any;
  searchParams?: any;
}
```

- 더불어 공식 문서를 참조하여 여러방식중 하나라는것을 알았다.
- 아마도, `Catch-all Segments` 방식일 것으로 보인다.
  - 공식 페이지 메뉴 : Routing > Dynamic Routes
  - 참조 : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

## MDN 에서 정의된 내용 다시 한번 되새겨 보기

### 1. Node.textContent

```js
let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

document.getElementById('divA').textContent = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```

- Node 인터페이스의 `textContent` 속성은 노드와 그 자손의 텍스트 콘텐츠를 표현한다.
  - 참조 : https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

**< HTMLElement.innerText와의 차이점 >**

(1) `textContent`는 `<script>`와 `<style>` 요소를 포함한 모든 요소의 콘텐츠를 가져온다. 반면 `innerText`는 "사람이 읽을 수 있는" 요소만 처리한다.
(2) `textContent`는 노드의 모든 요소를 반환한다. `innerText`는 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않는다.

**< HTMLElement.innerHTML와의 차이점 >**

- 이름 그대로 HTML을 반환한다.
- HTML로 분석할 필요가 없다는 점에서 textContent의 성능이 더 좋다.

### 2. Element.append

```js
append(param1);
append(param1, param2);
append(param1, param2, /* …, */ paramN);
```

- 참조 URL : https://developer.mozilla.org/en-US/docs/Web/API/Element/append

### 3. Element.insertAdjacentElement

- 특정 위치에 노드를 추가한다.

```js
insertAdjacentElement(position, element);
/**
 * < position >
 * - beforebegin
 * - afterbegin
 * - beforeend
 * - afterend
 */
```

- 참조 URL : https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

## useRef (React-Hook)

- 주요 사용 목적
  - useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않게 할 수 있다.
  - useRef를 통해 DOM 요소를 직접적으로 선택할 수 있다.

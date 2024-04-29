# 강의 내용 후기

## GNB란 무엇인가???

- Global Navigation Bar 의 약어..!!
- 참조 URL : https://www.ascentkorea.com/what-is-gnb/

## Typescript를 실제 적용하는 코드를 살펴보았을때, 생각보다 어려웠다.

- 단순한 형태의 string, number, boolean 과 같은 형태가 아닌

- 강의내용에서 이해가 바로 안된 타입스크립트 사용법들..

```ts
const routePaths = [
  '/',
  '/test1',
  '/test2',
  '/test2/vanilla',
  '/test2/react',
] as const;
// as 까지는 타입 단언의 의미로 이해했는데,
// 다음에 오는 const 라는 부분이 이해가 안갔음 => 상수로 타입 단언을 시켰다라는 말인가...?

/**
 * as const 를 통해 routePaths 라는 배열을 불변값 형태로 선언한다고 보면됨.
 *  -> 즉, 더이상 추가되지도... 빠지지도 않는 고정된 값으로 이루어진 배열...
 */
// enum을 사용해도 된다고함...
// 배열 인덱스의 값들이 string 으로 타이핑되어지는데, as const 를 붙임으로서 readonly 속성을 가지게 된다고함.

export type ROUTE_PATH = (typeof routePaths)[number];

// 여기서 routePaths 는 배열이기에 typeof 를 통해 'object' 가 떨어진다.
// object[number] 는 무슨 의미일까...
// 곰곰히 생각해보니 enum 값은 자동 숫자값 증가 형태의 모습이 보인다..

// 참조 URL : https://talkwithcode.tistory.com/101
```

```ts
export const routes: Record<ROUTE_PATH, ROUTE> = {};

// Record 는 모르는 문법...
// 뒤에나오는 < >부분은 제네릭 문법이다.
```

```ts
export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

/**
 * is 라는 문법도 처음 보지만
 * 강의 내용과 영어 뜻을 이해하면
 * route 는 ParentRoute 이다. 라고 해석된다.
 * 1. route 는 ROUTE 타입을 가지고 있다.
 * 2. ROUTE 타입은 ParentRoute 또는 ChildRoute 이다.
 *
 * 결론, route는 ParentRoute 일수도 ChildRoute 일수도 있지만 여기서는 is 문법을 통해
 * route 는 ParentRoute 타입 형태를 가지고 있다고 명시해주는 것이다.
 *
 *'as' 키워드란 요약하자면 '컴파일' 단계에서 타입 검사를 할 때 타입스크립트가 감지하지 못하는 애매한 타입 요소들을 직접 명시해주는 키워드
 *
 * is 키워드는 '함수가 호출된 범위 내에선 route를 ParentRoute 타입으로 보라' 는 것이다.
 *
 * 위 as 키워드와 마찬가지로 is 키워드 역시 컴파일 단계에서만 사용되며 런타임 단계에서는 순수한 js 파일과 동일하게 동작한다.
 *
 * 참조 URL : https://velog.io/@kwak1539/타입스크립트-is-as-문법-정리
 */
```

## Metadata

- Next.js 프레임워크, SSR 에서는 SEO을 다루는데 장점이 있다고 친구한테 들었다.
- next 라이브러리로 부터 Metadata 가져오는거 봐서는 이러한 방식으로 SEO 최적화(?) 할수도 있는 것같다.
- 테스트 삼아 title 값을 수정해보니 HTML 의 <title></title> 과 같은 방식의 페이지의 제목이 바뀌는걸 확인할 수 있었다.

```ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI요소모음 | FE JUN',
  description: 'Vanilla / React로 UI요소 만들기',
};
```

## 디렉터리 명칭이 [...item] 이라고요...?

- Next.js 프레임워크는 라우팅을 디렉터리 경로를 이용해서 라우팅이 가능하다고 정도는 어깨 넘어로 들었긴했다...
- 그래서 아마도 이러한 방식은 Next.js 의 특징점이지 않을까 추측 해본다.

![디렉터리 구조](https://github.com/cansus4569/vanillajs_react/assets/63139527/a0fdd824-f9e4-4ff6-baa2-26a8617f62ce)

- 폴더명에 디스트럭처링 문법이 들어갈지는 생각도 못했다..
- 강의에서는 설명해주지 않아서... 그냥 page 및 경로에 대한 이야기를 간략하게만 해버려서,,
- **_나중에 다시 확인해봐야겠다.._**

```ts
const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/');
  return <div>Item page {path}</div>;
};
```

- 의아한 점은 params 가 매개변수명이고 매개변수의 파라미터를 `{ item }` 라고 타이핑한거 같은데 ...(?)
  -> 근데 다시 살펴보면은 () => {} 형태의 화살표 함수를 사용하고 있음
  -> 그렇타면 () 소괄호 안에 있는것이 매개변수라고 볼 수 있음

- 그렇타면 params를 `{ item }` 재정의하고 뒤에 `{ params: { item: string[] }}` 이 부분이 타입을 나타내는 것인가...(?)
  -> (킹능성) 코드상에서는 item을 매개변수 처럼 사용하고 있다....

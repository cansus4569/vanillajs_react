# 5일차 강의 내용 정리

## controlled vs uncontrolled

### 1. controlled

- React가 상태를 관리하고 있는 컴포넌트
- 보통 Form 요소에서 쓰인다.
  - onChange에 대해서 React에 있는 이벤트 핸들러를 걸어서 React가  
    그 상태를 관리해서 Value에도 영향을 주게끔...

### 2. uncontrolled

- Form 요소에 해당하는 TextArea 에 대해서 React가 일절 관여하지 않음.
- 나머지 다른 부분의 자율적인 영역, 개발자의 역량에 맞춰서 처리를 하게끔 한 다음에  
  React는 그 부분에는 관여를 하지 않겠다라는 개념

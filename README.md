## typescript study

### typescript 란?
javascript(es5)의 상위 확장 개념 언어이다. <br>
그래서 es5의 문법을 그대로 사용할 수 있고, es6에서 새롭게 추가된 기능들을 기존의 자바스크립트 엔진에서 실행할 수 있다.

### typescript 장점

####정적 타입 지원

기존 javascript에서 함수를 선언할 때 아래와 같이 사용한다.
```javascript
function addNumber(a, b) {
    return a + b;
}

addNumber(1, 2);     // 3
addNumber('x', 'y'); // xy
```

위 함수는 2개의 매개변수를 전달 받아 두 수의 합을 반환하는 함수이다. <br>
매개변수의 자료형을 다르게 호출해도 javascript 엔진은 동적으로 값을 반환한다.

typescript는 정적 타입을 지원하는데, 아래와 같이 사용한다.
```typescript
function addNumber(a: number, b: number) {
    return a + b;
}
addNumber(1, 2);     // 3
addNumber('x', 'y'); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```
이처럼 명시적으로 정적 타입을 지정하는 코딩 방식은 여러 장점이 있다.
- 컴파일 단계에서 오류를 확인할 수 있다.
- 개발자의 의도를 명확하게 코드로 작성할 수 있다.
- 코드의 가독성을 높이고 결과 값을 에측할 수 있으며, 디버깅을 쉽게 할 수 있도록 한다.

#### 도구의 지원
IDE를 포함한 다양한 도구의 지원을 받을 수 있어 대규모 프로젝트를 진행하는데 좋다.

#### 객체지향 프로그래밍 지원
TypeScript는 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍을 지원한다. <br>
그래서 Java, C# 등 클래스 기반 객체 지향 언어에 익숙한 개발자가 자바스크립트 프로젝트를 수행하는 데 진입장벽을 낮추는 효과가 있다.

#### ES6 / ES Next 지원
TypeScript는 ES5보다 개발환경을 구축하는 데 좀 더 복잡한 편이지만, ES6와 달리 Babel을 사용하지 않아도 된다는 부분이 더 큰 장점이다.

#### Angular
Angular는 TypeScript 뿐만 아니라 ES5, ES6로도 작성할 수 있지만, 대부분 Angular 관련 문서들이 TypeScript로 작성되어있다.
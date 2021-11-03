## Immutable type

불변성(Immutability)란 말그대로 변하지 않는 것을 의미한다. 불변 데이터는 한번 생성되고나면 그 뒤에는 변할수 없다.

자바스크립트에는 원시 타입(primitive type)으로는

- Boolean,
- String
- Number
- Null
- undefined
- Symbol
이 있으며 이 원시 타입은 불변한다.<br /> 이 값은 메모리영역 안에서 변경이 불가능하며 변수에 할당할 때 완전히 새로운 값이 만들어져 재 할당된다.

```js
let name = 'foo';
let newName = name;
name = 'bar';

console.log(newName); //foo
console.log(name); //bar
```

## Mutable type

- 자바스크립트에서는 위에 나열한 immutable type을 제외하고 모든 값은 객체(Object)타입이며 변할 수 있는 값이다. 
- 객체는 새로운 값이 만들어지지 않고 직접적으로 변경이 가능하다.


### 객체

```js
let x = {
  name: 'junimo'
};

let y = x;

x.name = 'ken';

console.log(y.name); // ken
console.log(x === y) // true
```

### 배열

```js
let x = ['foo'];
let y = x;

x.push('bar');

console.log(y); // ['foo', 'bar']
console.log(x === y) // true
```



### const

```js
const car = {
  owner : "junimo",
  type : "truck"
};
//1. 
car = {
  owner : "ken",
  type : "truck"
};
//Uncaught TypeError: Assignment to constant variable.

//2.
car.owner = "ken";
console.log(car); // {owner: "ken", type: "truck"}
```

### 불변성을 지키는 것이 왜 중요한가?

- 개발자는 ``유지보수 가능``하고 ``가독성이 좋은 코드``를 작성해야한다.
- 불변성을 지키지 않는다면 위의 예시처럼 사용할 데이터가 어디서 어떻게 바뀌어가는지 흐름을 쫓아가기 어렵고, 이는 곧 예기치 못한 side effects나 버그로 이어지게 만든다.
- 다른 개발자가 코드를 보았을 때도 내가 모르는 어딘가에서 데이터가 변화했을거야! 라는 불필요한 의심없이 코드를 읽을 수 있다


- [참조링크](https://sustainable-dev.tistory.com/156)
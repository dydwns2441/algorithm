```js
const arr1 = ["yong", "jun"];
const arr2 = arr1;

console.log(arr1)
console.log(arr2)

arr1[0] = "jun";

console.log(arr1)
console.log(arr2)
```

```js
const string1 = "yong";
const string2 = string1;

console.log(string1)
console.log(string2)

string1 = "jun";

console.log(string2)
console.log(string2)
```

깊은 복사는 인스턴스가 완전히 독립적이다. 이와 같은 개념은 모든 value type에 적용

- 모든 데이터 타입은 값 타입(value type) 또는 참조 타입(reference type)을 가진다.

- 값 타입(Value type) : 각각의 고유의 메모리를 소유한다. 스위프트에서 struct, enum, array, tuples 들이 해당 타입에 속한다.
- 참조 타입(Reference type) : 생성된 인스턴스들은 주소값을 공유한다. 스위프트에서 class가 해당 타입에 속한다.

## 깊은 복사
- 데이터 자체를 통째로 복사한다.
- 복사된 두 객체는 완전히 독립적인 메모리를 차지한다.
- value type의 객체들은 깊은 복사를 하게 된다.

## 얕은 복사
- 얕은 복사는 아주 최소한만 복사를 한다. 
- 값을 복사한다 하더라도, 인스턴스가 메모리에 새로 생성되지 않는다. 
- 값 자체를 복사하는 것이 아니라 주소값을 복사하여 같은 메모리를 가리키기 때문이다.

- 새로운 인스턴스를 생성하지 않기 때문에 깊은 복사보다 상대적으로 빠르다. 
- reference type을 복사하는 경우 얕은 복사가 일어난다.





- [참조 링크](https://velog.io/@ellyheetov/Shallow-Copy-VS-Deep-Copy#%EC%A7%81%EB%A0%AC%ED%99%94serializing%EC%99%80-%EC%97%AD%EC%A7%81%EB%A0%AC%ED%99%94de-serializing)
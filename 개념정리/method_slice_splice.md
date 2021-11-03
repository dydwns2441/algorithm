## for ...in 객체 순환

- 객체의 키를 순회

```js
var obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(obj.a)
for (var item in obj) {
  
  console.log(item) // a, b, c
}

for (var item of obj) {
  console.log(item) // Uncaught TypeError: obj is not iterable
}
```

## for ...of 배열 순환

```js
let arr = [1, 2, 3];

for (var item of arr) {
  console.log(item); // 1, 2, 3
}

for (var item in arr) {
  console.log(item); // 0, 1, 2
}
```

```js
// Array 
for (const val of ['a', 'b', 'c']) { console.log(val); // 'a','b','c' 
} 
// String 
for (const val of 'abc') { 
  console.log(val); // 'a','b','c' 
  }
```

for ...of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다. for ...of구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 합니다(직접 명시 가능).

## 둘의 차이점

for ...in문
- Iterable object이면 모두 대상으로 함
- 객체의 모든 열거 가능한 속성에 대해 반복
- key를 리턴 (배열의 경우에는 index)

for ...of문
- [Symbol.iterator] 속성을 가지는 collection만 대상으로 함
- Iterable object이지만, prototype chain에 의한 Iterable은 대상에서 제외<br />
Array, Map, Set, String, TypedArray, arguments 등

- value를 리턴

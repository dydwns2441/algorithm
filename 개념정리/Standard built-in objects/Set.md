## Set

Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다.

```js
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1)); // true
console.log(set1.has(5)); // true
console.log(set1.has(6)); // false
```

```js
let arr = [1,2,3,4,4,4,4,4,4,4];
let setArr = new Set(arr);
let result = [...setArr];

console.log(result)
// [1,2,3,4]
```

## method

### 1. add
```js
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
```

### 2. has
```js
//1번에서 만든 Set
// mySet => Set { 1, 5, 'some text' }

mySet.has(1); // true
mySet.has(3); // false, 3은 set에 추가되지 않았음
mySet.has(5); // true
mySet.has('some text'); // Set { 1, 5, 'some text' }
```

### 3. delete, size
```js
mySet.size; // 3
mySet.delete(5); // set에서 5를 제거함
```
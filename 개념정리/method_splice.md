```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
```

splice 는 
첫번째 인자로 배열의 인덱스번호를 받고,
두번째 인자로 몇개를 자를지 number를 받는다.

splice(): 배열.splice(index, 1);
delete: delete 배열[index];

인덱스로 배열 아이템 삭제
```js
let array = [3,2,4,5,7,5,2];
let index = 3, number = 5;

//index 위치 배열 아이템 1개 삭제. 배열 길이가 줄어듬
array.splice(index, 1);
console.log(array);

//아이템 값이 같은 모든 배열 아이템 삭제
for (let i = 0; i < array.length; i++) {
    if (array[i] === number) { // 값이 같은 배열 인덱스 확인
        array.splice(i, 1);
    }
}
console.log(array);

//index 위치 배열 아이템 삭제. 배열 길이가 유지됨
delete array[index];
console.log(array);

//배열 아이템은 유지하고 값만 undefined 초기화
array[index-1] = undefined;
console.log(array);

//삭제한 배열 아이템의 값을 반환
let value = array.splice(index, 1)[0];
console.log(value);

콘솔 결과값
[3,2,4,7,5,2]
[3,2,4,7,2]
[3,2,4,empty,2]
[3,2,undefined, empty,2]
```
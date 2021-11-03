## filter
- 배열 각 요소에 대하여 주어진 함수의 결괏값이 ``true인 요소를 모아`` ``새로운 배열``
- 매개변수 확인하기
- 1. value: 현재요소
- 2. currentValue: 요소의 인덱스
- 3. currentIndex: 원본 배열


## reduce

- 배열의 각 요소에 대하여 reducer 함수를 실행하고, ``하나의 결과 값``을 반환한다.
- 매개변수 확인하기
- 1. accumulator: 리턴한 값을 저장하는 변수, 초기값을 지정한 경우, 초기값부터 시작
- 2. currentValue: 현재 요소
- 3. currentIndex: 요소의 인덱스
- 4. array: 원본배열 
```js
const numbers = [1,2,3,4,5]
const numbersSum = numbers.reduce((acc,cur)=> {
  console.log(acc, cur);
  return acc + cur
}, 0);

console.log(numbersSum)
```

- [참조링크](https://brunch.co.kr/@swimjiy/15)
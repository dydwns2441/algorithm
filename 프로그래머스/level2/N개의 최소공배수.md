
- [링크](https://programmers.co.kr/learn/courses/30/lessons/12953)
- 21.11.15 다시 풀음

- 최소공배수 = 두수의 곱 / 두수의 최대공약수


```js
function solution(arr) {
    var answer = 1;
    for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
     }

    return answer;
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log([2, 6, 8, 14]) // 168
console.log([1, 2, 3])   // 6
```




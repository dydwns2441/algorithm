## 문자열 내 p와 y의 개수

1. 문자열 내에 p와 y의 개수가 같다면 true, 아님 false

```js
function solution(s){
    let answer = true;
    const pCount = s.toLowerCase().split("").filter((el) => el === 'p').length;
    const yCount = s.toLowerCase().split("").filter((el) => el === 'y').length;
    
    if(pCount !== yCount) answer =false;
    return answer;
}

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false
```
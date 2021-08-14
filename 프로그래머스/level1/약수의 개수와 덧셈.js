//내가 한 풀이
function solution(left, right) {
  var answer = 0;
  let start = left;
  let end = right;

  for (start; start <= end; start++) {
    let count = 0;
    for (let i = 1; i <= start; i++) {
      if (start % i === 0) count++;
    }
    if (count % 2 === 0) answer += start;
    else answer -= start;
  }

  return answer;
}

//배운것.
function solution(left, right) {
  let answer = o;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else answer += 1;
  }
  return answer;
}

//* 제곱근이 정수면, 약수의 갯수가 홀수이다.
//* isInteger()-> 정수판별
//* 제곱근 구하기 sqrt()  9-> 3으로

//*Math.pow()함수는baseexponent처럼 base 에 exponent를 제곱한 값을 반환

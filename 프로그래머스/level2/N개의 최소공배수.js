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

// 출처 : https://programmers.co.kr/learn/courses/30/lessons/12953

console.log([2, 6, 8, 14]) // 168
console.log([1, 2, 3])   // 6

//for문
function solution(group, budget) {
  let answer = 0;
  group.sort((a, b) => a - b);

  for (let num of group) {
    if (budget - num >= 0) {
      budget -= num;
      answer++;
    } else break;
  }

  return answer;
}

//while문
function solution(group, budget) {
  group.sort((a, b) => a - b);
  while (group.reduce((a, b) => a + b, 0) > budget) {
    group.pop();
  }

  return group.length;
}


console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4

console.log(solution([1,2,3,4,5,6,7],28)) //7

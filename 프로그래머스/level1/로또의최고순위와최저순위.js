// 0이라는 숫자 맞을 수도 틀린 경우의 수가 된다.
// 0의 갯수를 제외한 숫자들이 몇개나 같은지 먼저 확인한다.
// 0의 갯수에 따라 등수를 찾는다.

function solution(lottos, win_nums) {
  var answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let count = 0;
  let zeroCount = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) zeroCount++;
    else if (win_nums.includes(lottos[i])) {
      count++;
    }
  }

  answer.push(rank[count + zeroCount], rank[count]);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3,5];
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1,6]
function solution(lottos, win_nums) {
  let rank = [6, 6, 5, 4, 3, 2, 1];
  var answer = [];

  let count = 0;
  let zero = 0;
  for (let num of lottos) {
    if (win_nums.includes(num)) {
      count++;
    } else if (num === 0) {
      zero++;
    }
  }

  answer.push(rank[count + zero], rank[count]);
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3,5];
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1,6]
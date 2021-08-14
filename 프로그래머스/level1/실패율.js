function solution(N, stages) {
  let answer = [];

  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++){
    let failPeople = stages.filter((p) => {
      return p === i
    }).length;

    let failPercent = 0;
    if (failPeople !== 0) failPercent = failPeople / stagesLength;
    stagesLength -= failPeople;

    answer.push({ idx: i, fail: failPercent });
  }

  answer.sort((a, b) => {
    if (a.fail === b.fail) {
      return a.fail - b.fail
    } else {
      return b.fail - a.fail
    }
  });
  console.log(answer);
  return answer.map((el)=> el.idx)
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));  //[3,4,2,1,5]
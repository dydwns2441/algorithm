function solution(N, stages) {
  var answer = [];
  // 1 => 1/8   2=> 3/7   3=> 2/4  4=> 1/2  5=> 0/1
  // 스테이지 통과를 못한사람도 빼줘야됩니다
  // 스테이지가 올라가면서 나오는 확률 =  이번에 통과 못한사람 / stages - 전에 못 통과한 사람
  // 내림차순 정렬 / 같으면 오름차순
  // stages를 오름차순으로 만들면 [1,2,2,2,3,4,6] shift하면 stages의 length가 바뀜
  // shift한 갯수 / stages.length = 각 스테이지 확률
  let count = 0;
  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++) {
    //스테이지에서 실패한 사람의 수 계산 //1   [1]
    let failPeople = stages.filter((people) => people === i).length; //[1] === 1
    //이거의 확률을 구해야 한ㅏ.
    // 실패한게 없엉서 failPeople이 0일때, failPeople 있는 경우
    let failPercent = 0;
    if (failPeople !== 0) failPercent = failPeople / stagesLength;
    stagesLength -= failPeople; // 7  4  2  1

    // console.log(stagesLength);
    answer.push({ idx: i, fail: failPercent });
    // console.log(answer);
  }
  // [
  //   {1: 0.125},
  //   {2: 2/7},
  //   {3: 0.5},
  //   {4: 0.5},
  //   {5: 0}
  // ]

  answer.sort((a, b) => {
    if (a.fail === b.fail) {
      return a.fail - b.fail;
    } else {
      return b.fail - a.fail;
    }
  });

  return answer.map((el) => el.idx);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));  //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4]));  //	[4,1,2,3]
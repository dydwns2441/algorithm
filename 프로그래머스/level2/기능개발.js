function solution(progresses, speeds) {
  let answer = [];

  let days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  let count = 1;
  for (let i = 0; i < days.length; i++){
    for (let j = i + 1; j <= days.length; j++){
      if (days[i] >= days[j]) count++;
      else {
        answer.push(count);
        i = i + count - 1;
        count = 1;
        break;
      }
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));  //[2,1];
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1,3,2]

//반복문을 한번만 돌릴 수 있다.
// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   );
//   let maxDay = days[0];

//   for (let i = 0, j = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }

//   return answer;
// }
//스터디에서 나온 식
// function solution(brown, yellow) {
//   let add = (brown - 4) / 2; // M + N
//   for (let i = 1; i <= parseInt(add / 2); i++) {
//     if (i * (add - i) === yellow) {
//       return [add - i + 2, i + 2];
//     }
//   }
// }

//
function solution(brown, yellow) {
  let answer = [];

  for (let i = yellow; i >= 1; i--) {
    if (yellow % i === 0) {
      let h = i;
      let w = yellow / i;

      if (brown === 2 * h + 2 * w + 4) {
        answer = [h + 2, w + 2];
        break;
      }
    }
  }
  return answer;
}

function solution(brown, yellow) {
  let answer = [];
  for (let i = yellow; i >= 1; i--){
    if (yellow % i === 0) {
      let height = i;
      let width = yellow / i;

      if (brown === 2 * height + 2 * width + 4) {
        answer = [height * 2, width + 2];
        break;
      }
    }
  }
  return answer;
}

// console.log(solution(10, 2));
// console.log(solution(8, 1));
// console.log(solution(24, 24));
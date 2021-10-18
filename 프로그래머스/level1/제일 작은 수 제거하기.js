//배열의 길이가 1일 경우는 [-1] 리턴해준다.
//배열의 길이가 2이상일 경우 가장 작은 수를 뺀 배열을 넣어준다.
// 최소값을 바꿔준다.
function solution(arr) {
  if (arr.length <= 1) return [-1];
  let min = 99999;
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    }
  }
  // const answer = arr.filter((_, idx) => idx !== minIdx);
  answer = arr.splice(minIdx, 1);
  return answer;
}

// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }

// 인자 1: stuff
// Number 타입의 40 이상 240 이하의 자연수를 담은 배열
// ex) [70, 50, 80, 50]
// 인자 2: limited
// Number 타입의 40 이상 240 이하의 자연수


// //*1번 풀이(shift와 pop이용)
// function movingStuff(stuff, limit) {
//   // 숫자를 받을 변수 count를 선언 및 할당
//     let count = 0;
//   // stuff 오름차순으로 정렬하기
//     let sorted = stuff.sort((a,b)=>a-b)
//   // [50, 50, 70, 80]
//   // 최대값 넣고 다른 것 넣어서 limit 넘는지
//   // 그 다음 최대값 넣어서 다른것 넣어서 limit 넘는지
//     let max = sorted.length-1
//     let min = 0

//   // max와 min을 더했을 때 limit을 넘어가면, 최대값을 바꿔주기 
//     while (sorted.length>0) {
//         if (sorted[max] + sorted[0] > limit) {
//             sorted.pop(); // 80 빠지는거죠
//             count++;
//             max = sorted.length - 1;
//         } else { // 최대 최소 합이 count와 같거나 작을 때
//             sorted.pop();
//             sorted.shift();
//             count++;
//             max = sorted.length - 1;
//         }
//     };
//   return count;
// };

//2번 풀이(인덱스 활용)
function movingStuff(stuff, limit) {
    let twoStuff = 0;
  // 짐을 무게순으로 오름차순 정렬
    let sortedStuff = stuff.sort((a, b) => a - b);
  // 가장 가벼운 짐의 인덱스
    let leftIdx = 0;
  // 가장 무거운 짐의 인덱스
    let rightIdx = sortedStuff.length - 1;
        while(leftIdx < rightIdx) {
      // 가장 가벼운 짐과 무거운 짐의 합이 limit 보다 작거나 같으면 2개를 한번에 나를 수 있다
            if(sortedStuff[leftIdx] + sortedStuff[rightIdx] <= limit) {
      // 다음 짐을 확인하기 위해 가장 가벼운 짐과 무거운 짐을 가리키는 인덱스를 옮겨주고
      // 한번에 2개 옮길 수 있는 개수를 +1 해준다   
                leftIdx++;
                rightIdx--;
                twoStuff++;
            } else {
          // 위 조건에 맞지 않는 경우는 한번에 한 개만 나를 수 있는 경우이기 때문에
          // 가장 무거운 짐의 인덱스만 옮겨준다
            rightIdx--;
        }
    }
  // 전체 짐의 개수에서 한번에 2개를 나를 수 있는 경우를 빼 주면 총 필요한 박스의 개수를 구할 수 있다
    return stuff.length - twoStuff;
};


let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

let output1 = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output1); // 4



//문제 출처 : 코드스테이츠
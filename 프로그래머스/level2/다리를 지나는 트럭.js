function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}


//코드스테이츠 프린터 문제 똑같다...
function queuePrinter(bufferSize, capacities, documents) {
  let print = new Array(bufferSize).fill(0); //[0,0]
  // time++
  let timer = 0;
  let printSum = 0; // 프린트 용량 초기값이 0

  let printNow = documents.shift(); // 7
  print.shift();
  print.push(printNow); // [0,7] // documents : [4,5,6]
  printSum = printSum + printNow; // 7
  timer++;

  //printNow 랑 printSum에 신경 써야
  while (printSum) {
    //printSum이 0이 될 때까지
    // 두 가지 변수가 변해야 함

    // printSum, printNow
    printNow = documents.shift(); // 4, 5 , 6
    printSum = printSum - print.shift(); // printSum = 7 , print.shift() = 0

    // 조건 : 최대 용량 => printNow + printSum
    if (printNow + printSum <= capacities) {
      print.push(printNow);
      printSum = printSum + printNow;
    } else {
      print.push(0); //printNow = 4 print=[0,4] printSum===4
      // printNow = 4 를 어디로 보낼지 생각해야하는데
      documents.unshift(printNow);
    }
    timer++;
  }
  return timer;
}

console.log(solution(2, 10, [7, 4, 5, 6]))
console.log(queuePrinter(2, 10, [7, 4, 5, 6]));
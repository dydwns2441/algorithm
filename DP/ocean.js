// 자신이 감옥에 간 사이 연인이었던 줄리아를 앤디에게 빼앗겨 화가 난 조지는 브레드, 맷과 함께 앤디 소유의 카지노 지하에 있는 금고를 털기로 합니다. 온갖 트랩을 뚫고 드디어 금고에 진입한 조지와 일행들. 조지는 이와중에 감옥에서 틈틈이 공부한 알고리즘을 이용해 target 금액을 훔칠 수 있는 방법의 경우의 수를 계산하기 시작합니다.

// 예를 들어 $50 을 훔칠 때 $10, $20, $50 이 있다면 다음과 같이 4 가지 방법으로 $50을 훔칠 수 있습니다.

// $50 한 장을 훔친다
// $20 두 장, $10 한 장을 훔친다
// $20 한 장, $10 세 장을 훔친다
// $10 다섯 장을 훔친다
// 훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type 을 입력받아, 조지가 target 을 훔칠 수 있는 방법의 수를 리턴하세요.

function ocean(target, type) {  // [0, [ 1 ,2 , 5 ]]
  // 경우의수 =4
  let arr =[1];
  for(let i=0; i< target; i++){
    arr.push(0);
  }
  // [0,1,2,3,4,5] ==>
  // [1,1,2,2,3,4] ==>
            // 1 . 2 . 5

  type.map((el)=> {
    arr[el] += 1;
    for(let i = el+1; i<=target; i++){
      arr[i] += arr[i-el] 
    }
  })
  return arr[target];
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output1 = ocean(100, [10, 20, 50]);
console.log(output1); // 10

let output2 = ocean(30, [5, 6, 7]);
console.log(output2); // 4
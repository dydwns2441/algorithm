function solution(numbers, target) {
  let count = 0;
  //뎁스를 하나 설정해서 그 뎁스를 재귀 호출 넘버스 배열의 길이와 같다면

  function DFS(depth, sum) {
    //최대 깊이까지 들어가본 거 여부 체크
    if (numbers.length === depth) {
      //3이 됬는지 안됬는지 체크
      if (sum === target) {
        //반환할 경우의 개수 ++
        count++;
      }
    } else {
      //양갈래로 뻗기
      DFS(depth + 1, sum + numbers[depth]);
      DFS(depth + 1, sum - numbers[depth]);
    }
    return;
  }
  //따로 선언하는 거 없이 0으로 호출하면 된다.
  DFS(0, 0);
  return count;
}


console.log(solution([1, 1, 1, 1, 1], 3)); //5


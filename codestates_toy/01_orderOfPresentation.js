function orderOfPresentation(N, K) {
  // 조의 개수 N, 발표 순서 K
  // N은 최대 12입니다.
  // 발표 순서의 최대 크기는 12팩토리얼 이다.

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  // 발표 순서를 담는 변수 생성
  let order = 0;

  // N개의 조 중에, 어떠한 조가 이미 포함되었는지 확인하기 위해 배열을 생성
  // 만약 N이 3이라면 [false, false, false, false]로 생성
  // 인덱스는 0부터 시작하지만 조는 1부터 시작하기 때문에 제일 첫 번째는 더미 데이터
  const isUsed = Array(N + 1).fill(false);

  // K의 길이만큼 순회
  // K의 i번째 조를 변수에 담는다.
  // 사용했는지 판별하기 위해 isUsed에 체크한다.
  // num보다 앞에 올 수 있는 수들의 배열을 복제해서,
  // 이 중에서 아직 사용되지 않은 수의 개수를 구한다.
  // 아직 사용되지 않은 수, 그 전까지의 모든 경우의 수를 카운트한다.
  // order에 추가
  for (let i = 0; i < K.length; i++) {
    const num = K[i];
    isUsed[num] = true;
    const candidates = isUsed.slice(1, num);

    const validCnt = candidates.filter((el) => el === false).length;
    const formerCnt = validCnt * factorial(N - i - 1);
    order = order + formerCnt;
  }

  return order;
}

console.log(orderOfPresentation(3, [2,3, 1]));
console.log(orderOfPresentation(5,[1,3,2,4,5]));
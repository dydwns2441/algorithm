
function solution(price, money, count) {
  let need = 0;
  for (let i = 1; i <= count; i++) {
    need += price * i;
  }

  if (need <= money) return 0;
  else return need - money;
}


//가우스 공식이라는데 공부하자
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

console.log(solution(3,20,4)) //10
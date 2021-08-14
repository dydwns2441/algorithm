function solution(n) {
  let three = n.toString(3).split("").reverse().join("");
  return parseInt(three, 3);
}


//toString(진법) -> 숫자의 진법으로 바꿔줌

//paeseInt(num, 진법) 
// 두번째 인자는 2~36까지 가능
// 
console.log(solution(45))
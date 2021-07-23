function permu(num){
  let count=0;
  for(let i=2; i <= num; i++){
    if(num % i === 0) count++
  }
  if(count===1) return true;
  else return false;
}

function boringBlackjack(cards) {
  arr=[]
  const pickOrNot = (idx,basket)=>{
    if(basket.length===3){
      console.log(basket);
      arr.push(basket.slice());
      return;
    }
    if(idx === cards.length) return;
    pickOrNot(idx+1, basket.concat(cards[idx]));
    pickOrNot(idx+1, basket);
  }
  pickOrNot(0,[]);
  let filtered = arr.filter((el)=> {
    let sum = el.reduce((a,c)=> a+c,0)
    if(permu(sum)) return el;
  })  
  return filtered.length;
}

console.log(boringBlackjack([1, 2, 3, 4]));  //1
console.log(boringBlackjack([2, 3, 4, 8, 13]));  //3
console.log(boringBlackjack([3, 5, 11, 29, 38, 41, 43]));  //8


//7월24일
//출처: 코드스테이츠 자료구조/알고리즘 블랙잭은 지겨워

// 1. 숫자로 이루어진 카드를 여러 장 받습니다.
// 2. 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
// 3. 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
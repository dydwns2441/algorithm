function divideChocolateStick(M, N) {
    let num1 = gcd(Math.max(M,N), Math.min(M,N));

    let filtered=[];

    for(let i=1; i<=Math.sqrt(num1); i++){
        if (num1 % i === 0) {
            filtered.push(i);
            if(i*i < num1){
                filtered.push(Math.floor(num1/i))
            }
        } 
    };
  // console.log(filtered);
    filtered.sort((a,b)=> a-b);
  // console.log(num1)
  // console.log(filtered);
    let arr = filtered.map((el)=> [el, M/el, N/el])
  // console.log("arr:",arr);
    return arr
//첫번째 인자들은 최대공약수의 약수
//두번째 인자와 세번째 인자는 약수로 나눈 값
};

function gcd(a, b) { // 단, a가 b보다 커야함.
    let R;
    while ((a % b) > 0)  {
        R = a % b; //나머지
        a = b;
        b = R;
    }
    return b;
};

let M = 4;
let N = 8;
console.log(divideChocolateStick(M, N));

console.log(divideChocolateStick(15, 30));


//7월 24일
//출처 코드스테이츠 자료구조/알고리즘 빼빼로데이

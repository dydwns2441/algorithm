function solution(n) {
    var answer = 0

    for(let i = 1 ; i < n/2;i++){
        for(let j = i,tmp=0 ; j < n+1;j++){
            tmp += j
            if(tmp ===n){
                answer += 1
            } else if(tmp > n){
                break
            }
        }        
    }
    return answer+1;
}

let n = 15
console.log(solution(n))  // 4
// 1+2+3+4+5 ==15
// 4+5+6 =15
// 7+8 =15
// 15 = 15

//* 출처: https://programmers.co.kr/learn/courses/30/lessons/12924
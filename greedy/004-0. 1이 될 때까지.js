//최대한 많이 나누기

//* 2개의 조건
//* N이 K의 배수가 될 떄까지 1씩 빼기
//* N을 K로 나누기

function solution(N, K) {
    let count = 0
    while (N >= K) {
        if (N % K === 0) {
            N = N / K;
            count++;
        }
        else {
            N -= 1;
            count++
        }
    }
    while (N > 1) {
        N -= 1;
        count++;
    }
    return count;
}


console.log(solution(25, 5));  //2
console.log(solution(25, 3));  //6
console.log(solution(17, 4));  //3


// 이것이 취업을 위한 코딩테스트이다 //그리디부분
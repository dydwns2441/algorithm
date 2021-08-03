function solution(s) {
    let zeroCount = 0;
    let loopCount = 0;
    
    while(s !== '1') {
        const tempLength = [...s].reduce((total, string) => {
            if(string === '0') {
              zeroCount += 1;
              return total;
            }
            return total + 1;
        }, 0);
        //1의 갯수를 이진수로 바꾼다.
        s = Length.toString(2);
        loopCount += 1;
    }
    
    return [loopCount, zeroCount];
}
//[연산횟수, 제거한 0의 갯수]
console.log(solution("110010101001")) // [3,8]
console.log(solution("01110")) // [3,3]
console.log(solution("1111111"	)) // [4,1]
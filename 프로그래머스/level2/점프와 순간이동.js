function solution(n){
    let end = n;
    let count = 0
    while(end){
        if (end % 2 === 1) count++;

        end = Math.floor(end/2)
        //내림을 함과 동시에 1이 빠진다.
    }
    
    return count
}

console.log(solution(5));       //2
console.log(solution(6));       //2
console.log(solution(5000));    //5
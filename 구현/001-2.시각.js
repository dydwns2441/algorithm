
function solution(N) {
    let count = 0;
    for (let hour = 0; hour< 24; hour++){
        for (let min = 0; min < 60; min++) {
            for (let sec = 0; sec < 60; sec++) {
                let str = String(hour) + String(min) + String(sec);

                if (str.indexOf(`${N}`) !== -1) {
                    
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(solution(5));
console.log(solution(3));

//*탐색 문제의 경우
//*전체 데이터 갯수가 100만개 이하일때 완전탐색을 사용하면 적절하다.

// 이 문제의 경우, 총 경우의 수가 86400가지 밖에 없다.
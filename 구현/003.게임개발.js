// 출처: 이것이 코딩테스트다 구현 파트 3번문제


//다시풀자...아닌거같다....
function solution(location, map) {
    let answer = 0;
    let N = map.length;
    let M = map[0].length
    let x = location[0];
    let y = location[1];
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let count = 1;
    let turnTime = 0;
    map[x][y] = 1;;
    while (true) {
        
        
        for (let i = 0; i < 4; i++){
            let nx = dx[i] + x;
            let ny = dy[i] + y;
            if (map[nx][ny] === 0) {
                map[nx][ny] = 1;
                x = nx;
                y = ny;
                count++;
                turnTime = 0;
                continue;
            }
            
             turnTime++;
            if (turnTime === 4) {
                nx = x - dx[i]
                ny = y - dy[i]

                if (map[nx][ny] === 0) {
                    x = nx;
                    y = ny;
                } else {
                    break;
                }
            }
            
        }
        break;
    }

    answer = count;
    return answer;
}



let location = [1, 1, 0];
// 앞의 두개는 현재위치, 뒤에는 방향
// 0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽 
let map = [
    [1, 1, 1, 1,1],
    [1, 0, 0, 0,1],
    [1, 1, 0, 1,1],
    [1, 1, 0, 1,1],
    [1, 1, 1, 1,1]
];
//0은 육지 1은 바다
console.log(solution(location, map))
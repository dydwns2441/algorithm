function solution(N, moves) {
    // let obj = {
    //     "R": [0, 1],
    //     "L": [0, -1],
    //     "U": [1, 0],
    //     "D": [-1,0]
    // }
    let x = 0, y = 0;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    let direction = ["L", "R", "U", "D"];
    for (let move of moves) {
        for (let i = 0; i < direction.length; i++){
            if (move === direction[i]) {
                
                let nx = x + dx[i];
                let ny = y + dy[i];
                console.log(nx, ny)
                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                x = nx;
                y = ny;
            }
            
        }
    }
    
    return [x,y];
}




//* R = 오른쪽으로 한칸이동
//* L = 왼쪽으로 한칸이동
//* U = 위로 한칸이동
//* D = 아래로 한칸이동
//* 첫번째 인자는 배열의 length N*N
//* 이동하여 도착한 좌표 리턴 [3,4]
// console.log(solution(5, "RRRUDD"))  //[2,3]
console.log(solution(5, "RRRRRRRRRUDD"))  //[2,3]



// 이것이 취업을 위한 코딩테스트이다 //그리디부분 p110
// function solution(dirs) {
//     var answer = 0;
    
//     let move = {U : [0,1], D : [0,-1], L: [-1,0], R:[1,0]};
    
//     let check = new Set();
//     let now = [0,0];
    
//     for(let i=0; i< dirs.length; i++){
//         let nx = now[0] + move[dirs[i]][0];
//         let ny = now[1] + move[dirs[i]][1];
        
//         if(nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
//         check.add(""+now[0]+now[1]+nx+ny);
//         check.add(""+nx+ny+now[0]+now[1]);
        
//         now = [nx,ny];
//     }
//     return check.size / 2;
// }


// set 이라는 함수가 엄청 유용하다. 한번 정리해야겠다.
// 키포인트는 현재위치+다음에 갈 위치를 문자열로 저장하여 겹치지 않게 갖는것 

function solution(dirs) {
    let move = { U: [-1, 0], L: [0, -1], D: [1, 0], R: [0, 1] };
    let check = new Set();
    let now = [0, 0];
    
    for (let i = 0; i < dirs.length; i++){
        let nx = now[1] + move[dirs[i]][1];
        let ny = now[0] + move[dirs[i]][0];

        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

        check.add("" + now[0] + now[1] + ny + nx);
        check.add("" + ny + nx + now[0] + now[1]);

        now = [ny, nx];
    }

    return check.size / 2;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
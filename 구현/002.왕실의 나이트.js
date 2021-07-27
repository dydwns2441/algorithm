// 출처: 이것이 코딩테스트다 구현 파트 2번문제

function solution(location) {
    let answer = 0;
    let matrix = []
    for (let i = 0; i < 8; i++){
        matrix.push(Array.from({ length: 8 }, () => 0))
    }
    let column = "abcdefgh"
    let col = Number(column.indexOf(location[0]));
    let row = Number(location[1])-1;

    let direction = [[-2, -1], [-2, 1], [-1, -2], [1, -2], [2, -1], [2, 1], [-1, 2], [1, 2]];

    for (let i = 0; i < direction.length; i++){
        let curCol = col + direction[i][0];
        let curRow = row + direction[i][1];

        if (curCol >= 0 && curRow >= 0 && curCol < 8 && curRow < 8) {
            answer++
        }
    }

    return answer;
}

console.log(solution("a1"));
console.log(solution("c2"))

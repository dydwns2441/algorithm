
//각 행마다 가장 작은수를 찾은 뒤에 그 수 중에서 가장 큰 수

// function solution(arr) {
//     let N = arr.length;
//     let M = arr[0].length;
//     let answer = 0;
//     let tmp = [];

//     for (let i = 0; i < N; i++){
//         let min = 10001;  //i값이 바뀔때마다 min값이 초기화 되어야 한다.
//         for (let j = 0; j < M; j++){
//             min = Math.min(arr[i][j], min)
//         }
//         tmp.push(min)
//     }
//     answer = Math.max(...tmp);
//     return answer;
// };



//* 새로운 풀이

function solution(arr) {
    let answer = 0;
    let M = arr[0].length;
    let N = arr.length;

    for (let i = 0; i < N; i++){
        arr[i].sort((a, b) => a - b);
        
        answer = Math.max(answer, arr[i][0]);
    }

    return answer;
}

console.log(solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2]
]));  // 2

console.log(solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4]
]));


// 이것이 취업을 위한 코딩테스트이다 p.96

//* 재귀로 푼 문제, 결과값은 제대로 나오지만 타임에러가 난다.
// function solution(land) {
//     var answer = 0;
//     let N = land.length;
//     let M = land[0].length;
//     // let ch = Array.from({length: M+1} , ()=>0)
//     function dfs(level, sum, k){
//         if(N === level){
//             // console.log(sum)
//             answer = Math.max(answer, sum);
//         }        
//         else {
//             for(let i = 0; i< M; i++){
//             // if(ch[i]===0){
// // console.log(ch);
//                 if(i===k) continue;
//                 // ch[i] =1;
//                 dfs(level+1, sum+land[level][i], i);
//                 // ch[i]=0;
//             // }
//         }}
//     }
//     dfs(0,0)
//     return answer;
// }

/*
여기다 타임에러안나게 해보기
*/
function solution(land) {
    let answer = 0;

    for(let i=0 ; i<land.length-1 ; i++){
        land[i+1] = max(land[i],land[i+1]);
    }
    answer = Math.max(...land[land.length-1])
    return answer;
}

function max(arr1,arr2){
    let stack = [];
    let newArr = [0,0,0,0];
    for(let i=0 ; i<arr2.length ; i++){
        for(let j=0 ; j<arr1.length ; j++){
            if(j === i) continue;
            stack.push(arr1[j]+arr2[i])
        }
        newArr[i] = Math.max(...stack);
        stack = [];
    }
    return newArr;
}


let land = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];

console.log(solution(land)); //16

// 출처: https://programmers.co.kr/learn/courses/30/lessons/12913
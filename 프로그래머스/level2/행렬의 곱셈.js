function solution(arr1, arr2) {
    var answer = [];
    let N = arr1.length;
    let M = arr2.length;
    let L = arr2[0].length;
    for(let i=0; i< N; i++){  //arr1[i][k] + arr2[k][j]
        answer.push([]);
        for(let j=0; j<L; j++){
            let sum = 0;
            for(let k=0; k < M;k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            answer[i].push(sum);
        }
    }
    return answer;
};

console.log([[2, 3, 2], [4, 2, 4], [3, 1, 4]],
    [[5, 4, 3], [2, 4, 1], [3, 1, 1]]);
    //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

    
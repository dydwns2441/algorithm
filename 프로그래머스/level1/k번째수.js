function solution(array, commands) {
    var answer = [];
    // commands 하나씩 접근을 해야한다.
    
    //구조분해 할당
    // for(let command of commands){
    //     let [start, end, selected] = command
    //     let arr = array.slice(start-1, end).sort((a,b)=> a - b);
    //     answer.push(arr[selected-1]);
    // }
    
    for(let command of commands){
        let arr = array.slice(command[0]-1, command[1]).sort((a,b)=> a-b);
        answer.push(arr[command[2]-1]);
    }
    return answer;
}


let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));
//[5,6,3]
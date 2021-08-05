// function solution(number, k) {
//     let answer=Number.MIN_SAFE_INTEGER; 
   
//     let n = number.length;  //4
    
//     function dfs(level, sum){
//         if(sum.length > n-k) return;
//         if(level=== n){
//             if(n-k === sum.length) answer= Math.max(answer, parseInt(sum)); 
//         }
//         else {
//             dfs(level+1, sum + number[level]);  //1 => // 9   //
//             dfs(level+1, sum)  
//         }
//     }
    
//     dfs(0, "")
//     return `${answer}`;
// }


function solution(number,k){
    const len = number.length -k;
    let result = [number[0]];
    for(let i=1; i< number.length; i++){
        while(result.length >0 && result[result.length -1]< number[i] && k >0) {
            result.pop();
            k--;
        }
        result.push(number[i]);
    }
    
    return result.slice(0, len).join('');
}

        let number1 = "1924";
        let number2 = "1231234";
        let k1 = 2; 
        let k2 = 3; 
        console.log(solution(number1, k1));
        console.log(solution(number2, k2));
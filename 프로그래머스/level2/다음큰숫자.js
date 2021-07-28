function solution(n) {
    var answer = 0;
    
    let num1Count = 0
    let num1 = n.toString(2).split('');
    for(let num of num1){
        if(num ==="1" ) num1Count++;
    }
    
    for(let i = n+1; i<= 1000000; i++){
        let num2Count =0;
        let num2 = i.toString(2).split('');
        for(let num of num2){
            if(num === "1") num2Count++
        }
        if(num2Count === num1Count) {
            answer = parseInt(num2.join(''), 2);
            break;
    }}
    return answer;
}


console.log(solution(78))  //83
console.log(solution(15))  //23



//출처 : https://programmers.co.kr/learn/courses/30/lessons/12911
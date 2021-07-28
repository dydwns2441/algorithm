function solution(str){
    let answer = true;
    let stack = [];
    
    if(str[0] === ")") answer =false;
    else {
        for(let s of str){
            if(s === "(") stack.push(s);
 	        else if (s === ")") stack.pop();
        }
        if(stack.length !==0) answer = false;
    }

    return answer;
}

console.log(solution("()()"));  //true
console.log(solution("(())()")); //true
console.log(solution(")()(")); //false;
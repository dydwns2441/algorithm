
//1번 풀이 =>런타임에러 남.
// function solution(s) {
//     var answer = [];
//     s =  s.toLowerCase().split(' ');
//     for(let el of s){
//         let first = el[0].toUpperCase();
//         let second = el.slice(1, el.length);
//         // console.log(first);
//         // console.log(second);
//         // console.log(el);
//         answer.push(first + second);
//     };
//     return answer.join(' ');
// }

//2번 풀이 =>이것도 런타임 에러남...
// function solution(s) {
//     s =  s.toLowerCase().split(' ');
        
//     let answer = s.map(el => {
//     let arr = el.split("");
//         if (arr[0] !== null) arr[0] = arr[0].toUpperCase();
//         return arr.join('');
//         }).join(' ');
    
//     return answer;
// }

//3번풀이
function solution(s) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] === " ") {
        answer += s[i].toUpperCase();
        } else {
        answer += s[i].toLowerCase();
        }
    };
    return answer;
};




//첫글자는 대문자로
//나머지는 소문자로 바꾼다.




console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
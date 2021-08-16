function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) answer = s[s.length / 2 - 1] + s[s.length / 2];
  else if (s.length % 2 !== 0) answer = s[Math.round(s.length / 2) - 1];
  return answer;
}


console.log(solution("abcde"))  //  "c"
console.log(solution("qwer")) //"we"
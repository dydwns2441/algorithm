function rockPaperScissors (num) {
  num = num || 3;
  let arr = ["rock", "paper", "scissors"];
  let answer = [];
  let tmp = Array.from({ length: num }, ()=> 0);
                              // [0,0,0]
  
  function dfs(level){
    if(level === num){
      answer.push(tmp.slice());
    }
    else {
      for(let i =0; i< arr.length; i++){
        tmp[level]=arr[i];
        dfs(level+1);
        tmp[level]=0;
      }
    }
  }
  dfs(0)
  return answer  
};

console.log(rockPaperScissors(5));
console.log(rockPaperScissors());

//문제 출처: 코드스테이츠 알고리즘 코플릿
//가위바위보
//* 중복순열
function newChickenRecipe(stuffArr, choiceNum) {
  //리턴할 빈배열을 만들고
  //stuffArr를 정렬해준다.
  let answer =[];
  stuffArr.sort((a,b)=> a-b);
  //배열의 길이
  //11000 미안합니다. 000이 들어간 숫자를 빼줘야하고,
  
  let filtered = stuffArr.filter((el)=> String(el).indexOf("000") === -1 );
  //stuffArr을 봤는데, 빈배열이거나 choiceNum보다 작다면 빈배열
  if(filtered.length ===0 || filtered.length < choiceNum ) return [] ;
  //[1,10,11, 111111111] 로까지 만듬
  let n = filtered.length;
  //우리가 숫자를 넣을 배열
  let temp = Array.from({length: choiceNum}, ()=>0);
  // [0,0,0,0]
  // check배열인데, 중복이 안되게 하기 위해서 체크배열이 필요하다.
  let ch = Array.from({length: n}, ()=>0);
  // [0,0,0,0]
  // let path =[];
                                    //[1,10,11, 111111111] 로까지 만듬    
  function dfs(level){ //0-1-2-3
    if(level===choiceNum){ // 4
      answer.push(temp.slice());
      // console.log(path);
    }
    else {
      for(let i=0; i< n; i++){ //n=4 
        if(ch[i]===0){
            ch[i] = 1;
            // path.push(filtered[i]);
            temp[level] = filtered[i]; 
            dfs(level + 1);
            // path.pop();
            ch[i] = 0;
          }                  
        }
      }
    };
    dfs(0)
    return answer;
};

console.log(newChickenRecipe([11,1, 10,11000, 1111111],4));
console.log(newChickenRecipe([10000, 10, 1], 3)
);

//문제 출처: 코드스테이츠 자료구조 [순열]새로운 치킨 소스 레시피
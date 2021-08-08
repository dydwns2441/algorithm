function solution(n, words) {
    // debugger;
    let answer = [];
    let number = 0;
    let order = 0;
    
    for(let i=1; i< words.length; i++){
        let subArr = words.slice(0,i);
        //현재 글자의 맨뒤에 글자                           다음글자의 맨 앞글자       //중복된 단어가 있는 경우
        if((words[i-1].substring(words[i-1].length-1) !== words[i][0]) || (subArr.some(word => word === words[i]))){
            //some으로 boolean값을 얻을 수 있다.
            if((i+1)%n ===0){
                number=n
            } else {
                number = (i+1)%n;

            }
    order=Math.ceil((i+1)/n);
            break;
        }
    }
    
    
    //결과값을 담아준다.
    if(number ===0 && order ===0){
        answer = [0,0]
    } else {
        answer = [number, order];
    }
    
    return answer;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) // [3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either",
    "recognize", "encourage", "ensure", "establish", "hang", "gather",
    "refer", "reference", "estimate", "executive"])) // [0,0]
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]))  //[1,3]


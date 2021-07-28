function solution(msg) {
    var answer = [];

    let dic = ["A", "B", "C", "D", "E",
                "F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O",
                "P", "Q", "R", "S", "T",
                "U", "V", "W", "X", "Y", "Z"];

    while(msg.length !== 0) {
        let w = '';
        let wc = '';
        let i = 0;
        
        for (i = 0; i < msg.length; i ++) {
            w = msg.slice(0, i);
            wc = msg.slice(0, i + 1);
            
            if (dic.indexOf(wc) === -1){
                dic.push(wc);
                answer.push(dic.indexOf(w) + 1);
                break;
            }
            if (i === msg.length -1) {
                answer.push(dic.indexOf(wc) + 1);  
            }
        }
        msg = msg.slice(i);
        
    }
    return answer;
}

console.log(solution("KAKAO"));  //[ 11, 1, 27, 15 ]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
//[ 20, 15,  2,  5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34 ]

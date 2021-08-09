//다 통과하지 못했다......비코즈
//옷을 잃어버렸지만, 2벌을 가져왔을 경우 한벌이 된다
function solution(n, lost, reserve) {
    let inStudent = [];

    for(let i=1; i<=n ; i++){
        if(!lost.includes(i)){
            inStudent.push(i)
        }}

	for(let i=0; i< lost.length;i++){
        if(reserve.includes(lost[i]-1)){
            inStudent.push(lost[i])
            reserve.splice(reserve.indexOf(lost[i]-1),1);
        } else if(reserve.includes(lost[i]+1)){
            inStudent.push(lost[i])
            reserve.splice(reserve.indexOf(lost[i]+1),1);
        }
        console.log("for inStudent :", inStudent)
        console.log("lost[i] : ", lost[i])
    }

    let answer = inStudent.length;
    return answer;
};


function solution(n, lost, reserve) {
  var answer = n;
  let sortlost = lost.sort((a, b) => a - b);
  let queue = reserve.sort((a, b) => a - b);

  queue = queue.filter((x) => !lost.includes(x));
  sortlost = sortlost.filter((y) => !reserve.includes(y));
  // 중복 제거

  while (queue.length > 0) {
    let cur = queue.shift();
    for (let i = 0; i < lost.length; i++) {
      if (sortlost[i] - 1 === cur || sortlost[i] + 1 === cur) {
        answer += 1;
        cur = queue.shift();
      }
    }
  }

  return answer - sortlost.length;
}

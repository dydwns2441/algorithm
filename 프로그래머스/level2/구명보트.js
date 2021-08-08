function solution(people, limit) {
    people.sort((a,b) => a-b);
    
    let count=0;
    
    while(people.length) {
        let front= people[0];
        let back = people[people.length-1];
        //맨뒤와 맨앞을 더했을때 limit을 넘는다면 맨뒤꺼 아웃 / 카운트 플러스1
        if(front+ back > limit) {
            people.pop();
            count++
        } else {
            //limit과 같거나 작다면 두개다 빼고, 카운트 플러스1
            people.pop();
            people.shift();
            count++
        }
        if(people.length ===0) break;   
    }
        return count;
}


console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
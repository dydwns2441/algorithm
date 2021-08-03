function solution(skill, skill_trees) {
    let skills = skill.split('');
    let count = 0;
    
    for(let i=0; i< skill_trees.length;i++){
        let str = skill_trees[i].split('').filter((ele)=> skills.includes(ele)).join('');
        if(str === skill.substring(0, str.length)){
            count++
        }
    }
    return count;
}

// 배워야할 스킬을 먼저 스플릿해주고,
//반복문을 돌며 includes로 같은게 있을시 리턴하여 조인한다.
// str과 str.length길이만큼의 skill이 같다면 카운트 ++

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
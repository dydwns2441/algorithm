    function solution(n) {
        let count = 0;

        let coins = [500, 100, 50, 10];

        for (let coin of coins) {
            count += parseInt(n / coin)
            console.log(count);
            n = parseInt(n % coin)
            console.log(n)
            }
        return count;
        }

        //시간 복잡도는 O(k)

    let n = 1260;
console.log(solution(n));
    

// 이것이 취업을 위한 코딩테스트이다 //그리디부분


function solution(n) {
    let coins = [500, 100, 50, 10]
    let answer = 0;

    for (let coin of coins) {
        answer += parseInt(n / coin);  //
        n = parseInt(n % coin);
    }
    return answer;
};
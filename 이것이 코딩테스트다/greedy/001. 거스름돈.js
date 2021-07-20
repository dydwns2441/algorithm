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

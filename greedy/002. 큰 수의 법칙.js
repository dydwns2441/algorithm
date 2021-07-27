//* 큰수의 법칙

    //* m크기 만큼 수를 더하여 배열에서 가장 큰 수를 찾는다.
    //* 동일한 인덱스에 해당하는 수가 연속해서 k번을 초과할 수 없다
    //* ex) 6+6+6+5+6+6+6+5 = 46 이 된다

    //*   힌트: 가장 큰수와 두번째 큰수를 활용한다.
        
    function solution(arr, k, m) {
        let answer = 0;
        let n = arr.length
        arr.sort();
        let first = arr[n - 1];
        let second = arr[n - 2];
        //* 1번 방법
        // let count = parseInt(m/ (k+1)) * k;
        //     count += m% (k+1);
        //     answer += (count) * first;
        //     answer += (m-count) * second 

        //2번 방법
        while (m) {
            for (let i = 1; i <= k; i++) {
                if (m === 0) break;
                answer += first;
                m -= 1;
            }
                if (m === 0) break;
                answer += second;
                m -= 1
            }
            return answer;
        }



// function solution(arr, k, m) {
//     let answer = 0;
//         arr.sort((a, b) => a - b);
//     let first = arr[arr.length - 1]
//     let second = arr[arr.length -2]
    
//     while (m > 0) {
//         for (let i = 0; i < k; i++){
//             if (m === 0) break;
//             answer += first
//             m -=1
//             }
//     }
//     if (m === 0) break;
//     resul += second;
//     m -= 1;

//     return answer;
// }

        let arr = [2, 4, 5, 4, 6]
        let m = 8 //8번의 숫자를 더해야한다.
        let k = 3 //한 숫자를 연속으로 쓸수 있는 횟수
console.log(solution(arr, k, m));
        
// 이것이 취업을 위한 코딩테스트이다 //그리디부분
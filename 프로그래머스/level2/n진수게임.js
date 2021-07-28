function solution(n, t, m, p) {
    var answer = '';
    //p의 배수의 인덱스만 가져온다.
    //while문을 돌면서... 문자열에서 빼와야한다. t*m 길이만큼 나올만큼
    
    //n진수 
    let str = "";
    let i =0;
    while(str.length < m*t){
        str += i.toString(n).toUpperCase();
        i++;
    }
    // console.log(str);
    // for(let i =0 ; i<=t*m; i++){
    //     str += i.toString(n).toUpperCase();
    // }
    str = str.slice(0,m*t);
    // console.log(str);
    answer = str.split('').filter((el, idx)=> idx % m === p-1).join('');                                // 0        
    
    return answer;
};

//인자 차례대로 진법, 미리구할 숫자의 갯수, 게임에 참가하는 인원 , 튜브의 순서
console.log(solution(16, 16, 2, 1))

//* slice 사용이유
// 만약에 구해야할 숫자 t가 4개고, 참가인원 m이 3인 경우에는 저희가 문자열을 길이 12가 될 때까지만 구하면 되는데
// 문자열 길이가 12가 되기 전까지 while문을 돌리면 str은
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11까지의 숫자를 str에 넣어주게되는데 
// 이 때 str = '1234567891011' 의 길이는 13으로 구해지게 된다.
// 구하려고 했던 길이 12보다 더 나오게 된다
// 이것처럼 이후에 진행되는 숫자도 점점 자리수가 늘어나서 
//참가 인원보다 자릿수가 더 늘어나는 경우가 생길 수 있다고 생각해서 slice를 사용해줘야한다.
function solution(n, arr1, arr2) {
  var answer = [];
  //배열 안의 요소들을 2진수로 바꿔준다 + 자릿수를 5자리로 만들어야함
  let newArr1 = arr1.map((el) => {
    let bin = el.toString(2);
    for (let i = 0; i < n; i++) {
      if (bin.length !== n) bin = "0" + bin;
      else return bin;
    }
  });
  let newArr2 = arr2.map((el) => {
    let bin = el.toString(2);
    for (let i = 0; i < n; i++) {
      if (bin.length !== n) bin = "0" + bin;
      else return bin;
    }
  });
  //

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (newArr1[i][j] === "1" || newArr2[i][j] === "1") str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
console.log(solution(n,arr1,arr2));
// ["#####","# # #", "### #", "# ##", "#####"]
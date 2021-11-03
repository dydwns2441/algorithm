// function gcd(a, b) {
//   if (b == 0) return a;
//   else return gcd(b, (a % b));
// }

//! 배열을 순회한다

// console.log(gcd(8, 12));
company = ["google","naver","kakao","meta","samsung","apple"]
function practice() {
  
  let a = company.map((el, idx, arr) => {
    return [el,idx,arr]
  })
  return a;
}

// console.log(practice());


//newArr =[];
// function practice1() {
//   let newArr =[]
//   company.forEach((el, idx, arr) => {
//      newArr.push(el)
//   })
//   return newArr;
//  }

// console.log(practice1())
 
// const numbers = [1,2,3,4,5]
// const numbersSum = numbers.reduce((acc,cur,idx,arr)=> {
//   console.log(acc, cur,idx,arr);
//   return acc + cur
// }, 0);

// console.log(numbersSum)

// const arr1 = ["yong", "jun"];
// const arr2 = arr1;

// console.log(arr1)
// console.log(arr2)

// arr1[0] = "jun";

// console.log(arr1)
// console.log(arr2)

let string1 = "yong";
let string2 = string1;

console.log(string1)
console.log(string2)

string1 = "jun";

console.log(string1)
console.log(string2)
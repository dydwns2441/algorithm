function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

    return arr.length > max ? max : arr.length;
}

console.log(solution([2, 2, 3, 4]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));

// new Set(배열)  배열의 요소중에 중복되는 것을 제거해준다.

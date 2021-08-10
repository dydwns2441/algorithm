function solution(answers) {
  let pattern1 = [1, 2, 3, 4, 5];
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer = [0, 0, 0];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (pattern1[i % pattern1.length] === answers[i]) {
      answer[0] += 1;
    }
    if (pattern2[i % pattern2.length] === answers[i]) {
      answer[1] += 1;
    }
    if (pattern3[i % pattern3.length] === answers[i]) {
      answer[2] += 1;
    }
  }

  let max = Math.max(...answer);
  if (answer[0] === max) result.push(1);
  if (answer[1] === max) result.push(2);
  if (answer[2] === max) result.push(3);

  return result;
}

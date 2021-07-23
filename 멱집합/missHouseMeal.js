function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = sideDishes.sort();

    let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === sorted.length) {
      // 마지막 문자까지 검토한 경우
      // console.log(subset); 콘솔로그가 여기에 위치할경우 거꾸로 나오게 된다.
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);  //  "" , "", "" ,,"" 하나가 들어간다.
    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset.concat(sorted[idx])); //
  };

  pickOrNot(0, []);

  return subSets.sort();
};


//*멱집합 집밥이 그리워
dishes=["eggroll", "kimchi","fishSoup", "fishAndChips"]
console.log(missHouseMeal(dishes));

//출처: 코드스테이츠 자료구조/알고리즘 파트

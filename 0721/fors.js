var numArr = [1, 2, 3, 4];
numArr.description = 'four numbers';

console.log(numArr);

/**
 * forEach()
 */
console.log('forEach');
numArr.forEach((n) => console.log(n));
// forEach()는 배열을 순회하면서 각 항목을 인자로 받아 출력,
// description 프로퍼티는 무시했음. --> ?
// 함수 실행 중간에 멈출 수 없으며, 조건에 따라 멈춰야 한다면 every()를 사용해야한다.
console.log('every');
numArr.every((n) => console.log(n)); // ? 1만 출력하고 멈춰버린다.

/** from MDN
 * every() 메소드는 배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트합니다.
 * 
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 90];

console.log(array1.every(isBelowThreshold));
// expected output: true

...? forEach()랑 쓰는 이유가 아예 다른 것 같은데...

every는 (이산)수학에서 전칭("for all", ∀) 정량자(quantifier, 한정자)처럼 행동합니다.
특히, 빈 배열에 대해서는 true를 반환합니다. (이는 공집합의 모든 요소가 어떤 주어진 조건을 만족하는 무의미한 참입니다.)

every는 호출되는 배열을 변화시키지(mutate) 않습니다.

every에 의해 처리되는 요소의 범위는 첫 callback 호출 전에 설정됩니다.
every 호출이 시작한 뒤 배열에 추가된 요소는 callback에 의해 방문되지 않습니다.
배열의 기존 요소가 변경되는 경우, callback에 전달한 그 값은 every가 요소를 방문한 시점의 값이 됩니다; 삭제된 요소는 방문되지 않습니다.

every 는 따로 다시 보기.
 */


/**
 * for-in
 */
console.log('for-in');
for (let n in numArr) {
  console.log(n);
}
/**
 * 객체의 프로퍼티 이름을 순회한다. 배열과 같은 데이터 컬렉션도 순회 가능.
 * 프로퍼티 이름은 문자열로 출력된다.
 * 그래서 값을 부르려면 객체[n] 써야할걸
 */
console.log('for-in 2');
for (let n in numArr) {
  console.log(n, numArr[n]);
}

/**
 * for-of
 */